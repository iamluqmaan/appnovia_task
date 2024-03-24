import Image from "next/image";
import LandingPage from "./Views/LandingPage";
import sophia from  '../public/assets/images/sophia.png';
import maria from  '../public/assets/images/maria.png';
import quote from  '../public/assets/icons/quote.png';
import sponsors from  '../public/assets/images/sponsors.png';
import slider from  '../public/assets/images/slider.png';
import emailArrow from  '../public/assets/icons/emailArrow.png';
import Footer from "./components/Footer";
import ImageCollections from "./Views/ImageCollections";
import Blog from "./Views/Blog";

export default function Home() {
  return (
    <div>
      <LandingPage />
      {/* first section */}
      <div className="py-20 text-center">
        <p className="text-xs sm:text-sm md:text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
      </div>
      {/* end of first section */}

      {/* image collection sections */}
       <ImageCollections /> 

      {/* MAN AND WOMAN COLLECTION SECTION */}
      <section className=" space-y-5 py-20">
        <div className="ring-1 ring-neutral-700 sm:flex h-[25vw] md:h-[50vw]">
          <div className="man w-full sm:bg-contain border-r border-neutral-700 sm:w-1/2 py-10 flex flex-col justify-center items-center">
            <div className="text-white md:text-black text-[3vw] font-medium">MAN</div>
            <div className="md:py-5 md:pb-14">
              <span className="bg-white sm:bg-transparent ring-1 ring-neutral-800 text-xs px-1 md:px-7 md:py-2 cursor-pointer"> shop collection </span>
            </div>
          </div>
          <div className="woman w-full sm:bg-contain sm:w-1/2 py-10 flex flex-col justify-center items-center">
            <div className=" text-black font-medium text-[3vw]">WOMAN</div>
            <div className="md:py-5 md:pb-14">
              <span className="bg-white sm:bg-transparent ring-1 ring-neutral-800 text-xs px-1 md:px-7 md:py-2 cursor-pointer"> shop collection </span>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="pt-40 pb-20 sm:pb-0 sm:py-20">
        <div className="flex justify-center">
          <Image
            src={quote}
          />
        </div>
        <div className="py-5">
          <p className="text-xs sm:text:sm text-center">
            Accusantium doloremque laudantium, totam rem aperiam. <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={sponsors}
          />
        </div>
      </section>

      {/* FOURTH SECTION */}
      <section className="facing">
        <div className=" text-white md:space-y-5 flex flex-col justify-center items-center h-[40vw] facing mx-10">
          <div className="space-x-4">
            <span className="text-[4vw]">ONYX</span>
            <span className="text-[2vw]">X</span>
            <span className="text-[4vw]">THE FLOW</span>
          </div>
          <div className="text-xs tracking-wide underline cursor-pointer">
            Read more
          </div>
        </div>
      </section>

      {/* Blog section */}
      <Blog />

      {/* Sign-up section*/}
      <section>
        <div className="signUp">
          <div className="flex flex-col items-center justify-center py-10">
            <span className="text-center">
              <p className="text-xs sm:text-sm text-white md:text-black md:text-2xl font-medium">Sign up to our newsletter for all the <br /> latest news & discounts.</p>
            </span>
            <div className="flex justify-center py-5 sm:py-7 md:py-14">
              <span className="mail flex border-b md:text-black border-neutral-200 md:border-neutral-900 pb-3">
              <input className=" bg-inherit outline-none text-xs" placeholder="Email address" />
              <div className="hidden sm:visible px-3 sm:px-5 md:px-24"></div>
              <Image 
                src={emailArrow}
                width={25}
                height={25}
                className="hidden sm:visible"
              />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Authors' section*/}
      <section >
        <div className="space-x-7 space-y-5 md:space-y-0 md:flex py-20 px-10">
          <div>
            <Image 
              src={maria}
            />
          </div>
          <div>
            <Image
              src={sophia}
            />
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <span className="font-medium text-lg">Meet The Artists Behind The Corsen. <br /> Maria & Sophia</span>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod.</p>
            <div className=" py-5 pb-14">
              <span className="ring-1 ring-neutral-500 text-xs px-7 py-2 cursor-pointer"> shop collection </span>
            </div>
          </div>
        </div>
      </section>

      {/* social media section*/}
      <section>
        <div>
          <div className="space-y-1 py-5">
            <p className="pl-20">Instagram</p>
            <p className="text-xs pl-20">Follow us on @qodeinteractive</p>
          </div>
          <Image 
            src={slider}
          />
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
