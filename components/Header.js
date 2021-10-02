import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo .svg";

function Header() {
  const [isActive, setIsActive] = useState(true);

  return (
    <header className="w-full z-50 bg-[#153956] h-[70px] top-5">
      <div className="flex justify-between items-center sm:px-28 px-12">
        <Link href="/">
          <a>
            <div className="flex items-center mt-5 h-[40px] w-[125px]">
              <Image src={logo} alt="logo" />
            </div>
          </a>
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/blog&cases">
            <a>
              <span className="text-[#8ca7ce] hover:text-white">
                Blog & Cases
              </span>
            </a>
          </Link>

          <Link href="/about">
            <a>
              <span className="text-[#8ca7ce] hover:text-white">About</span>
            </a>
          </Link>

          <Link href="/contact">
            <a>
              <span className="text-[#8ca7ce] hover:text-white">Contact</span>
            </a>
          </Link>

          {/* Social Media */}

          <Link href="/editProfile">
            <a></a>
          </Link>
        </div>
        <div className="hidden sm:flex gap-4 cursor-pointer">
          <AiOutlineTwitter className="text-[#ee927d] text-2xl" />
          <AiFillLinkedin className="text-[#ee927d] text-2xl" />
          <AiFillGithub className="text-[#ee927d] text-2xl" />
        </div>
        <div className="block sm:hidden cursor-pointer relative">
          <FaBars
            className="flex text-3xl text-[#ee8f79]"
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <nav
          className={
            isActive
              ? "hidden"
              : "sm:hidden flex flex-col absolute w-full h-screen gap-[1px] sm:gap-8 cursor-pointer top-[3rem] left-0 bottom-0 right-0"
          }
        >
          <span className="text-[#8ca7ce] hover:text-white mr-12 text-right text-sm">
            Blog & Cases
          </span>
          <span className="text-[#8ca7ce] hover:text-white mr-12 text-right text-sm">
            About
          </span>
          <span className="text-[#8ca7ce] hover:text-white mr-12 text-right text-sm">
            Contact
          </span>
          <div className="flex sm:hidden gap-4 cursor-pointer justify-end mt-1 mr-12 text-sm">
            <AiOutlineTwitter className="text-[#ee927d] text-xl" />
            <AiFillLinkedin className="text-[#ee927d] text-xl" />
            <AiFillGithub className="text-[#ee927d] text-xl" />
          </div>
        </nav>
      </div>

      {/* Mobile */}
    </header>
  );
}

export default Header;
