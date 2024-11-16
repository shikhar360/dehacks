"use client";

export default function Home() {
  // function handleContact(e) {
  //   window.open(e);
  // }
  return (
    <div className="">

      <div className="w-full bg-[#f0c84f]  text-black min-h-full sm:pb-32 pb-12  sm:pt-16 pt-14 flex items-center justify-center flex-col relative ">
        <div className=" sm:w-8/12 relative w-11/12 text-center leading-10">
          <img
            src="/img/towns.png"
            alt="image"
            className="rounded-xl pr-10 "
          />
         <span className="text-7xl absolute left-1/2 -translate-x-1/2 pl-10 -translate-y-32 tracking-[2rem] text-white ta font-bold ">
          DBNB
          </span>

          
          <img
            src="/img/head-cheese.png"
            alt="image"
            className="rounded-xl w-56 absolute top-10 right-10 "
          />
          <img
            src="/img/head-chilli.png"
            alt="image"
            className="rounded-xl w-44 absolute top-20 left-20"
          />
          <img
            src="/img/head-crab.png"
            alt="image"
            className="rounded-xl w-24 absolute bottom-10 right-40"
          />
          <img
            src="/img/head-frog.png"
            alt="image"
            className="rounded-xl w-32 absolute  top-72 left-36"
          />
        
            
        </div>

        <span className=" sm:w-8/12 w-11/12 text-xl font-mono flex flex-col gap-y-4 text-center ">

          <span className='text-white font-sans font-semibold tracking-wider  text-4xl'> Decentralized Stays for the Global Nouns Nomad</span>
          <br/>
          <span className='text-base text-white w-[50%] mx-auto' >DBNB is a Decentralized Hackathon-House listing platform , where
          you can list your own hacker houses or homes anonymously
         for NOUNS DAO members</span>
        </span>
        <div className=" mt-8">{/* <ConnectButton/> */}</div>

        <div className="w-full sm:pt-20 pt-8 flex flex-col items-center justify-center">
          <span className="sm:mt-8 mt-6 sm:mb-6 mb-4 sm:text-3xl text-2xl tracking-wider text-[#0c0518] ">
            Powered By{" "}
          </span>
          <div className=" flex items-center sm:flex-row flex-col justify-center sm:px-32 px-16 sm:gap-10 gap-4 max-w-full ">
            <img
              src="/img/morph.png"

  
              alt="image"
              className="rounded-xl h-20 w-60 "
            />
            <img
              src="/img/base.png"


              alt="image"
              className="rounded-xlh-20 w-60"
            />
            <img
              src="/img/glasses.png"


              alt="image"
              className="rounded-xl h-24 0 w-60 "
            />
            <img
            src="/img/dynamic.png"


            alt="image"
            className="rounded-xl h-20 w-60"
          />
         
          </div>
        </div>
      </div>

      <div className="w-full h-full py-28 px-8  grid sm:grid-cols-3 grid-cols-2  sm:gap-10 gap-4 justify-center bg-[#8338ec] text-black">
        <div className=" sm:w-4/5 mx-auto w-full py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9] ">
          <img
            src="/img/house1.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full sm:w-4/5 py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Book a house{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]  mx-auto">
          <img
            src="/img/house2.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Securely Pay in Crypto{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]  mx-auto">
          <img
            src="/img/house3.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
           List your home{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]  mx-auto">
          <img
            src="/img/house4.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
           Earn Money after listing{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]  mx-auto">
          <img
            src="/img/house5.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Extend your dates as you want{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6  flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]  mx-auto">
          <img
            src="/img/house6.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Get top notch security of blockchain{" "}
          </div>
        </div>
      </div>


      <footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
    </div>
  );
}
