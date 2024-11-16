"use client"


import {useState} from 'react';

export default function ListingHomeComponent () {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [imgHash, setImgHash] = useState('');
  const [loading, setLoading] = useState(false);

  // const listHome = useListHome();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await listHome(name, location, description, parseInt(pricePerNight), imgHash);
      alert('Home listed successfully!');
      // Clear the form
      setName('');
      setLocation('');
      setDescription('');
      setPricePerNight('');
      setImgHash('');
    } catch (error) {
      alert('Failed to list home. Please try again.');
      console.warn(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    < div className='w-full flex flex-col items-center justify-center py-20 bg-white text-black '>
      <div >
      <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Awesome Villa"  onChange={(e) => setName(e.target.value)}/>
</label>
      </div>
      <div>
         
        <label>Location: </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price per Night (in Wei): </label>
        <input
          type="number"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image Hash: </label>
        <input
          type="text"
          value={imgHash}
          onChange={(e) => setImgHash(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Listing...' : 'List Home'}
      </button>
    </div>
  );
};
