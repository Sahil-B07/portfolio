
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ myFont }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      <nav id="navbar" className="bg-[#000000] z-20 fixed w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:px-[5rem] ">
          <div id="logo" className="text-3xl font-bold text-white">
            <span className={myFont.kalam.className}>सा</span>
          </div>
          <button
          onClick={()=>{setToggle(!toggle)}}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-300 rounded-lg md:hidden bg-black "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${toggle?'block':'hidden'} w-full md:block md:w-auto relative`} id="navbar-default">
            <ul
              className={`${myFont.sora.className} text-base text-white flex gap-10 w-full font-medium flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:mt-0 bg-zinc-800 md:bg-black items-center`}
            >
              <Link data-scroll-to href={"#hero"}>
                Home
              </Link>
              <Link data-scroll-to href={"#about"}>
                AboutMe
              </Link>
              <Link data-scroll-to href={"#projects"}>
                Projects
              </Link>
              <Link data-scroll-to href={"#contact"}>
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
