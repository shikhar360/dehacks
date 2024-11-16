// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract DecentralizedAirbnb {
    uint private nextHomeId = 1;
    uint private nextBookingId = 1;
    address payable public platformOwner;

    constructor() {
        platformOwner = payable(msg.sender);
    }

    struct Home {
        uint id;
        address owner;
        string name;
        string location;
        string description;
        uint pricePerNight;
        string imgHash;
    }

    struct Booking {
        uint id;
        uint homeId;
        address guest;
        uint startDate;
        uint endDate;
        uint securityDeposit;
        bool isCompleted;
    }

    mapping(uint => Home) public homes;
    mapping(uint => Booking) public bookings;
    mapping(uint => Review[]) public homeReviews; // Stores reviews for each home
    uint[] private homeIds;
    uint[] private bookingIds;

    struct Review {
        address reviewer;
        uint8 rating;
        string comment;
    }

    event HomeListed(uint homeId, address owner, string name);
    event BookingCreated(uint bookingId, uint homeId, address guest);
    event ReviewAdded(uint homeId, address reviewer);

    modifier onlyHomeOwner(uint _homeId) {
        require(homes[_homeId].owner == msg.sender, "Not the home owner");
        _;
    }

    function listHome(
        string memory _name,
        string memory _location,
        string memory _description,
        uint _pricePerNight,
        string memory _imgHash
    ) external {
        homes[nextHomeId] = Home(
            nextHomeId,
            msg.sender,
            _name,
            _location,
            _description,
            _pricePerNight,
            _imgHash
        );
        
        homeIds.push(nextHomeId);
        emit HomeListed(nextHomeId, msg.sender, _name);
        nextHomeId++;
    }

    function bookHome(uint _homeId, uint _stayDuration) external payable {
        Home memory home = homes[_homeId];
        require(msg.value >= home.pricePerNight * _stayDuration, "Insufficient funds");

        bookings[nextBookingId] = Booking(
            nextBookingId,
            _homeId,
            msg.sender,
            block.timestamp,
            block.timestamp + _stayDuration * 1 days,
            msg.value,
            false
        );

        bookingIds.push(nextBookingId);
        emit BookingCreated(nextBookingId, _homeId, msg.sender);
        nextBookingId++;
    }

    function completeBooking(uint _bookingId) external onlyHomeOwner(bookings[_bookingId].homeId) {
        Booking storage booking = bookings[_bookingId];
        require(block.timestamp >= booking.endDate, "Stay period not yet ended");
        require(!booking.isCompleted, "Booking already completed");

        payable(homes[booking.homeId].owner).transfer(booking.securityDeposit);
        booking.isCompleted = true;
    }

    function leaveReview(uint _homeId, uint8 _rating, string memory _comment) external {
        require(_rating > 0 && _rating <= 5, "Rating must be between 1 and 5");
        homeReviews[_homeId].push(Review(msg.sender, _rating, _comment));
        emit ReviewAdded(_homeId, msg.sender);
    }

    function withdrawPlatformFunds() external {
        require(msg.sender == platformOwner, "Only platform owner can withdraw");
        platformOwner.transfer(address(this).balance);
    }

    function getHomeReviews(uint _homeId) external view returns (Review[] memory) {
        return homeReviews[_homeId];
    }

    function getAllHomes() external view returns (Home[] memory) {
        Home[] memory allHomes = new Home[](homeIds.length);
        for (uint i = 0; i < homeIds.length; i++) {
            allHomes[i] = homes[homeIds[i]];
        }
        return allHomes;
    }

    function getBookingsByAddress(address _user) external view returns (Booking[] memory) {
        uint count = 0;
        for (uint i = 0; i < bookingIds.length; i++) {
            if (bookings[bookingIds[i]].guest == _user) {
                count++;
            }
        }

        Booking[] memory userBookings = new Booking[](count);
        uint index = 0;
        for (uint i = 0; i < bookingIds.length; i++) {
            if (bookings[bookingIds[i]].guest == _user) {
                userBookings[index] = bookings[bookingIds[i]];
                index++;
            }
        }
        return userBookings;
    }
}