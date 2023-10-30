import "../app.css";
import React, { useState } from "react";
import airplane from "../assests/airplane.png";
import deals from "../assests/get-deals.png";
import hotel from "../assests/get-hotel.png";
import umrah from "../assests/umrah-package.png";
import settings from "../assests/setting.png";
import trip from "../assests/trip.png";
import visa from "../assests/get-visa.png";
import insurrance from "../assests/get-insurrance.png";
import { Link } from "react-router-dom";
import SearchUmrah from "./SearchUmrah";


function Main() {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);
  const [Sidebar, setSidebar] = useState(true);
  const togle = () => {
    if (Sidebar == false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };

  // todo work

  const inp = (e) => {
    setinput(e);
  };

  const AddTodo = () => {
    settodo([...todo, input]);

    setinput("");
  };

  console.log(todo);
  // todo work and

  return (
    <>
      {/* Navbar Start */}
      <header class="text-gray-600 body-font ">
        <div class="w-full mx-auto flex bg-[#699FC9] flex-wrap fixed p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <button onClick={() => togle()}>
              <svg
                width="27"
                height="27"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.91699 20.6043V23.521H34.0837V20.6043H4.91699ZM4.91699 13.3127V16.2293H34.0837V13.3127H4.91699ZM4.91699 6.021V8.93766H34.0837V6.021H4.91699Z"
                  fill="white"
                />
              </svg>
            </button>

            <span
              id="logo"
              class="ml-3 px-3 text-xl font-bold text-white mb-1 "
            >
              Saer.<span className="text-sm">pk</span>
            </span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap  items-center text-base ">
            <div className="rounded-md border-white border bg-[#699FC9] flex items-center  px-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8699 10.4617 13.3343 9.21058 13.3333 7.91667C13.3333 6.84535 13.0157 5.79809 12.4205 4.90733C11.8253 4.01656 10.9793 3.32229 9.98954 2.91232C8.99977 2.50235 7.91066 2.39508 6.85993 2.60408C5.8092 2.81308 4.84404 3.32897 4.08651 4.08651C3.32897 4.84404 2.81309 5.8092 2.60408 6.85993C2.39508 7.91066 2.50235 8.99977 2.91232 9.98954C3.3223 10.9793 4.01656 11.8253 4.90733 12.4205C5.7981 13.0157 6.84535 13.3333 7.91667 13.3333C9.25834 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                  fill="white"
                />{" "}
              </svg>
              <input
                type="text"
                className="outline-none bg-transparent px-2 h-9 w-72 placeholder-white "
                placeholder="Search"
                name=""
                id=""
              />
            </div>
          </nav>

          <div className="flex items-center  ">
            <button>
              <svg
                className="h-6 w-6  md:w-7 md:h-7 md:mt-0 mt-2.5 "
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 29.5C16.375 29.5 17.5 28.375 17.5 27H12.5C12.5 28.375 13.625 29.5 15 29.5ZM22.5 22V15.75C22.5 11.9125 20.4625 8.7 16.875 7.85V7C16.875 5.9625 16.0375 5.125 15 5.125C13.9625 5.125 13.125 5.9625 13.125 7V7.85C9.55 8.7 7.5 11.9 7.5 15.75V22L5 24.5V25.75H25V24.5L22.5 22ZM20 23.25H10V15.75C10 12.65 11.8875 10.125 15 10.125C18.1125 10.125 20 12.65 20 15.75V23.25Z"
                  fill="white"
                />
                <circle cx="21" cy="9" r="4" fill="#B00404" />
              </svg>
            </button>
            <button class="inline-flex items-center border-0 py-1 px-5 md:px-7 focus:outline-none text-gray-200  text-base mt-4 md:mt-0">
              Login
            </button>
            <button class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none text-[#699FC9] hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Navbar Close */}

      {/* SideBar Start */}
      {Sidebar ? (
        <div className="bg-[#699FC9] w-1/4  md:w-1/5 h-5/6 fixed top-10 md:top-0 left-0 overflow-y-auto  md:p-4 p-1 mt-16 ">
          <ul className="space-y-4 mt-8 text-left md:leading-loose">
            <li className="hover:bg-white hover:rounded-tl-2xl hover:rounded-bl-2xl hover:p-1  w-48 text-white hover:text-[#699FC9]">
              <Link href="/about" className="flex items-center">
                <img
                  src={umrah}
                  alt="..."
                  className="md:w-5  md:h-3 w-4 h-2.5 hover:bg-[#699FC9]"
                />

                <p className=" mx-1 md:mx-3 md:text-lg text-xs">
                  Umrah Packages
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center">
                <img
                  className="md:w-7 md:h-7 w-6 h-6 -ml-1.5"
                  src={airplane}
                  alt="..."
                />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Flight
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center">
                <img src={hotel} className="md:w-5 md:h-3 w-4 h-3" alt="..." />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Get Hotel
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center">
                <img
                  className="bg-white md:w-5 md:h-5 w-4 h-4"
                  src={settings}
                  alt="..."
                />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Manage booking
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center">
                <img
                  src={insurrance}
                  className="md:w-5 md:h-5 w-4 h-4"
                  alt="..."
                />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Get insurrance
                </p>
              </Link>
            </li>{" "}
            <li>
              <Link href="/about" className="flex items-center">
                <img src={deals} className="md:w-5 md:h-5 w-4 h-4" alt="..." />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Deals
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center  ">
                <img
                  className="-ml-1 md:w-6 md:h-6 w-4 h-4"
                  src={visa}
                  alt="..."
                />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Get visa
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center ">
                <img
                  src={trip}
                  className="-ml-1 md:w-5 md:h-5 w-4 h-4"
                  alt="..."
                />
                <p className="text-white mx-1 md:mx-3 md:text-lg text-xs">
                  Trip
                </p>
              </Link>
            </li>
          </ul>

          <div className="md:w-32 w-24 text-sm flex justify-center bg-white md:text-md text-[#699FC9] md:p-1.5 p-0.5 rounded-tl-lg rounded-br-lg mt-5">
            <button>Log Out</button>
          </div>
        </div>
      ) : null}

      {/* Sidebar Close */}

      {/* Body Content Start */}
  <SearchUmrah/>


    </>
  );
}

export default Main;
