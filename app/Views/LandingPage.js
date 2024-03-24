import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="home flex flex-col space-y-5 justify-between h-screen w-full pb-10 ">
        <Navbar />
      <div></div>
      <div className="px-5 sm:px-7 md:px-14 space-y-5 border-b border-neutral-700 mx-10">
        <span className="md:text-[35px] font-medium ">Mixed Textiles</span>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod.</p>
        <div className=" py-5 pb-14">
          <span className="ring-1 ring-neutral-500 text-xs px-7 py-2 cursor-pointer"> shop collection </span>
        </div>
      </div>
    </div>
  );
}
