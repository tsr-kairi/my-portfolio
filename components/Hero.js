import { AiFillHtml5 } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";

import Image from "next/image";
import Link from "next/link";
import RkImg from "../images/rkNew.jpg";
import TsrBg from "../images/tsrbg.svg";
import TsrBg1 from "../images/tsrbg 1.svg";
import TsrBg2 from "../images/tsrbg 1.png";
import StarTsr from "../images/meteorite_stars.svg";
import LilPlusTsr from "../images/lil-plus-bg.svg";
import MeteoritePlusLeft from "../images/meteorite_plus-left.svg";
import TsrBgLeft from "../images/tsr-bg-left.svg";
import Blog1 from "../images/blog1.jpeg";
import Blog2 from "../images/blog02.jpeg";
import WebTools from "../images/web-tool3.png";
import LDark from "../images/lever-dark.svg";
import LColor from "../images/lever-color.svg";
import BDark from "../images/button_dark.svg";
import BColor from "../images/button_light.svg";
import StarSvg from "../images/Stars.svg";
import Contact from "../images/contact-us.svg";

function Hero() {
  return (
    <hero>
      <div className="w-full flex flex-col items-center justify-center sm:px-28 px-6">
        <div className="w-full flex sm:flex-row flex-col justify-between gap-8 mt-[4.8rem]">
          <div className="relative flex flex-col w-full sm:w-[50%] justify-center text-white">
            <h1 className="text-4xl font-bold font-serif text-[#ffa38e]">
              Hi, I’m Ranjit, a FrontEnd Developer!
            </h1>
            <p className="mt-8 text-xl font-normal font-sans text-[#f5f2e8]">
              By day I design Website, an open-core Digital platform. By night I
              do digital illustration. Creative expression is what lights me up,
              and I'm always open to learning about new opportunities.
            </p>
            <div className="relative flex">
              <button className="relative z-50 transform hover:scale-110 duration-500 ease-in-out origin-center transition bg-[#f07b61] text-[#153956] text-xl font-bold w-[160px] h-[50px] mt-8">
                Get in touch
              </button>
              <div className="absolute bg-[#002e4d] w-[160px] h-[50px] sm:left-0 left-[1rem] sm:right-[24rem] top-[3rem]"></div>
            </div>
            <div className="absolute left-[11.5rem] top-[21rem] sm:top-[19rem] w-[90px]">
              <Image src={LilPlusTsr} alt="LilPlusTsr" className="" />
            </div>
          </div>
          <div className="w-full sm:w-[33%] overflow-hidden mt-12 sm:mt-0">
            <div className="relative sm:hidden z-50 w-[150px] sm:w-[400px] h-[150px] sm:h-[400px] rounded-full border-[10px] sm:border-[28px] border-solid border-[#002e4d]">
              <Image src={RkImg} alt="RkImg" className="rounded-full" />
            </div>
            <div className="hidden sm:flex absolute top-[70px] left-[290px]">
              <Image src={TsrBg2} alt="TsrBg2" classNam e="" />
            </div>
            <div className="sm:hidden h-screen w-full min-w-[350px] absolute top-[580px] left-0">
              <Image src={TsrBg} alt="TsrBg" classNam e="" />
            </div>
          </div>
          <div className="absolute sm:left-[50rem] top-[50rem] sm:top-[30.5rem]">
            <Image src={StarTsr} alt="StarTsr" className="" />
          </div>
        </div>

        <div className="flex flex-col w-full relative mt-96 sm:mt-56">
          <h2 className="text-left text-[#f2a278] text-2xl font-medium sm:ml-0 ml-12">
            I can help you with
          </h2>
          <div className="absolute sm:left-[-3rem] top-[-3rem] w-[150px]">
            <Image
              src={MeteoritePlusLeft}
              alt="MeteoritePlusLeft"
              className=""
            />
          </div>
          <div className="absolute left-[-7.1rem] top-[7rem]">
            <Image src={TsrBgLeft} alt="TsrBgLeft" className="" />
          </div>

          <div className="z-50 px-2 sm:px-40 py-20 sm:pt-20 mt-40 pb-8 sm:ml-44 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <AiFillHtml5 className="text-[#ee927d] text-8xl ml-12" />

              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">HTML5</div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-4 pt-4">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Vues
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Reacts
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Naxts
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <DiCss3 className="text-[#ee927d] text-8xl ml-12" />

              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">CSS</div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Scss
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Sass
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Tailwind
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <DiJavascript className="text-[#ee927d] text-8xl ml-12" />
              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">
                  JAVASCRIPT
                </div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Reacts
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Vues
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Nexts
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <AiFillHtml5 className="text-[#ee927d] text-8xl ml-12" />

              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">HTML5</div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-4 pt-4">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Vues
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Reacts
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Naxts
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <DiCss3 className="text-[#ee927d] text-8xl ml-12" />

              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">CSS</div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Scss
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Sass
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Tailwind
                </span>
              </div>
            </div>

            {/* Card 6 */}
            <div class="rounded overflow-hidden shadow-lg h-[50vh]">
              <DiJavascript className="text-[#ee927d] text-8xl ml-12" />
              <div class="px-6 py-4">
                <div class="font-bold text-[#f2a278] text-xl mb-2">
                  JAVASCRIPT
                </div>
                <p class="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Reacts
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Vues
                </span>
                <span class="nline-block bg-gray-200 rounded-full px-2 py-1 text-[9px] font-semibold text-gray-700 mr-1">
                  #Nexts
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center mb-16">
            <button className="relative z-50 transform hover:scale-110 duration-500 ease-in-out origin-center transition bg-[#153956] border border-solid border-[#f07b61] text-[#f07b61] text-xl font-bold w-[160px] h-[50px] sm:ml-52">
              Case Studies
            </button>
            <div className="absolute border border-solid border-[#f07b61] w-[160px] h-[50px] sm:left-[35.5rem] left-36 top-5 sm:top-[1rem]"></div>
          </div>
        </div>

        <Link href="/blog&cases">
          <a>
            {/* Blogs  */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <h2 className="text-[#f2a278] text-2xl font-normal">
                  Latest blog posts
                </h2>
                <FaBookReader className="text-white text-xl" />
              </div>
              {/* Blog-1 */}
              <div className="border border-solid border-[#ee927d] mt-4">
                <div class="flex sm:flex-row flex-col hover:bg-[#002e4d] sm:h-[40vh] overflow-hidden p-6">
                  <div class="w-full md:w-2/3">
                    <Image src={Blog1} alt="Blog1" className="" />
                  </div>

                  <div class="w-full flex flex-col flex-grow flex-shrink">
                    <div class="overflow-hidden">
                      <p class="w-full text-white text-xs md:text-sm pt-4 px-4   tracking-wider">
                        THOUGHTS
                      </p>
                      <div class="w-full font-bold text-xl text-white px-4  mt-4">
                        👋 Talk: Web Design for Non-Designers
                      </div>
                      <p class="text-white font-serif text-base px-4 mb-2 mt-4">
                        Simple tips for better web design (video below)
                      </p>
                    </div>

                    <div class="flex-none mt-auto rounded-b rounded-t-none overflow-hidden px-4 py-4">
                      <div class="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-full mr-4 avatar">
                          <Image
                            src={RkImg}
                            alt="RkImg"
                            className="rounded-full"
                          />
                        </div>

                        <p class="text-gray-400 text-xs md:text-sm">
                          1 MIN READ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog-2 */}
              <div className="border border-solid border-[#ee927d]">
                <div class="flex sm:flex-row flex-col hover:bg-[#002e4d] sm:h-[40vh] rounded overflow-hidden shadow-lg p-6">
                  <div class="w-full md:w-2/3">
                    <Image src={Blog2} alt="Blog2" className="" />
                  </div>

                  <div class="w-full flex flex-col flex-grow flex-shrink">
                    <div class="overflow-hidden">
                      <p class="w-full text-white text-xs md:text-sm pt-4 px-4   tracking-wider">
                        THOUGHTS
                      </p>
                      <div class="w-full font-bold text-xl text-white px-4  mt-4">
                        👋 I meditated every day for a year
                      </div>
                      <p class="text-white font-serif text-base px-4 mb-2 mt-4">
                        Here's how my life changed
                      </p>
                    </div>

                    <div class="flex-none mt-auto rounded-b rounded-t-none overflow-hidden px-4 py-4">
                      <div class="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-full mr-4 avatar">
                          <Image
                            src={RkImg}
                            alt="RkImg"
                            className="rounded-full"
                          />
                        </div>

                        <p class="text-gray-400 text-xs md:text-sm">
                          1 MIN READ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/about">
          {/* About */}
          <div className="relative flex sm:flex-row flex-col w-full mt-32 sm:mt-40 mb-52">
            <div className="flex">
              {/* Leavers  */}
              <div class="absolute top-[-4rem] left-[14rem] sm:left-[60rem]">
                <Image src={LDark} alt="LDark" className="" />
              </div>
              <div class="absolute top-[-4rem] left-[17rem] sm:left-[63rem]">
                <Image src={LDark} alt="LDark" className="" />
              </div>
              <div class="absolute top-[-4rem] left-[20rem] sm:left-[66rem]">
                <Image src={LColor} alt="LColor" className="" />
              </div>
              {/* Buttons */}
              <div class="absolute top-[4rem] left-[-1rem]">
                <Image src={BDark} alt="BDark" className="" />
              </div>
              <div class="absolute top-[7.5rem] left-[-1rem]">
                <Image src={BColor} alt="BColor" className="" />
              </div>
              <div class="absolute top-[11rem] left-[-1rem]">
                <Image src={BDark} alt="BDark" className="" />
              </div>
            </div>
            <div className="sm:w-[60%] flex flex-col border-[8px] border-[#002e4d] sm:border-b-[8px] border-b-0">
              <div className="p-6 sm:p-8 flex flex-col text-white">
                <h1 className="text-2xl text-[#f2a278] pb-8">About me</h1>
                <p className="text-base sm:text-lg text-white">
                  Life is my favorite art project. Whether I'm working with a
                  world-class team building a complex application, creating
                  funky illustrations, or designing my home office, I see
                  everything I do as an opportunity for authentic creative
                  self-expression. If you're feeling that vibe, we'll get along!
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  I live a moderately nomadic lifestyle and prefer to move with
                  the sun. My perfect life includes a house within walking
                  distance to a nice beach with waves, freedom to work where and
                  when I like, and a like-minded tribe of people surrounding me.
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  If you want to check out my latest UX Design work, you can see
                  everything I do (literally everything) on my GitLab timeline.
                  My latest illustrations and physical products are available in
                  my shop society6.com/printsandpixels You can also check out my
                  Instagram for more illustrations and a glimpse into my
                  process.
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  When I'm not making stuff, I like doing yoga, cooking, or
                  exploring new places.
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  If you think we should co-create something awesome together,
                  let me know!
                </p>
              </div>
              <div className="p-8 border-t-[8px] border-[#002e4d]">
                <h1 className="text-base sm:text-lg text-white mt-4">
                  Current location: New Delhi, India..
                </h1>
              </div>
            </div>
            <div className="relative sm:w-[40%] border-[8px] sm:border-l-0 border-[#002e4d]">
              <div className="flex flex-col p-6 sm:p-8 text-white border-b-[8px] border-[#002e4d]">
                <h1 className="text-2xl text-[#f2a278] pb-8">
                  Projects and opportunities I'm interested in
                </h1>

                <p className="text-base sm:text-lg text-white mt-4">
                  Software that enables creators. Think GitLab, GitHub, Figma,
                  Miro, Procreate, Affinity and the pke.
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  Digital illustration projects.
                </p>
                <p className="text-base sm:text-lg text-white mt-4">
                  Creative surface design.
                </p>
              </div>
              <div className="p-8 flex flex-col text-white mt-4">
                <h1 className="text-2xl text-[#f2a278]">Fav tools</h1>
                <div class="w-full mt-8">
                  <Image src={WebTools} alt="WebTools" className="" />
                </div>
              </div>
              <div className="flex">
                {/* Leavers  */}
                <div class="absolute top-[43rem] sm:top-[51rem] left-[1.5rem] sm:left-[-38rem]">
                  <Image src={StarSvg} alt="StarSvg" className="" />
                </div>
                <div class="absolute top-[43rem] sm:top-[51rem] left-[16.5rem] sm:left-[20rem]">
                  <Image src={StarSvg} alt="StarSvg" className="" />
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Contact-us */}
        <div className="max-w-screen-xl mb-20 mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg">
          {/* Left Side */}
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl lg:text-5xl text-[#f2a278] font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div class="text-white mt-8">
                Hate forms? Send us an{" "}
                <span class="underline cursor-pointer text-[#f2a278]">
                  email
                </span>{" "}
                instead.
              </div>
            </div>
            <div class="mt-8 text-center">
              <Image src={Contact} alt="Contact" className="" />
            </div>
          </div>
          {/* Right Side */}
          <div class="">
            <div>
              <span class="uppercase text-sm text-[#f2a278] font-bold">
                Full Name
              </span>
              <input
                class="w-full bg-[#002e4d] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              ></input>
              <div class="mt-8">
                <span class="uppercase text-sm text-[#f2a278] font-bold">
                  Email
                </span>
                <input
                  class="w-full bg-[#002e4d] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                ></input>
                <div class="mt-8">
                  <span class="uppercase text-sm text-[#f2a278] font-bold">
                    Message
                  </span>
                  <textarea class="w-full h-32 bg-[#002e4d] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>

                <div className="relative flex mt-4 justify-center">
                  <button className="relative z-50 transform hover:scale-110 duration-500 ease-in-out origin-center transition bg-[#f07b61] text-[#153956] uppercase text-sm font-bold tracking-wide w-[160px] h-[50px] mt-8">
                    SEND MESSAGE
                  </button>
                  <div className="absolute bg-[#002e4d] w-[160px] h-[50px] sm:left-28 left-[3rem] sm:right-[24rem] top-[3rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </hero>
  );
}

export default Hero;
