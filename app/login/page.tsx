import {
  DynamicWidget
} from "@dynamic-labs/sdk-react-core";

export default function Login() {
  return (
    <div className=" bg-[url('/img/login.png')] min-w-full min-h-screen sm:py-36 py-12 flex items-center justify-center  relative  bg-cover bg-no-repeat">
    
      <h1 className="mb-8 -translate-y-1/2  w-[30%] text-3xl top-1/2 left-32 tracking-wider absolute text-[#0c0518] text-4xl font-semibold tracking-tighter ">
       Login to get started!
       <br/>
       <span className="text-lg w-[40%] font-normal tracking-normal "> Enjoy amazing stays in your upcomming travel region at comparatively less cost 🏠 </span>
      </h1>
    
    <div  className="absolute w-[27%] min-h-60 flex items-center justify-center px-10 right-[18%]">

    <DynamicWidget />
    </div>

   
  </div>
  );
}