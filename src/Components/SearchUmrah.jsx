import React,{useState} from 'react'
import booking from "../assests/booking.png";
import download from "../assests/download.png";
import help from "../assests/help.png";
import haram from "../assests/Images/haram.png";
import masjid from "../assests/Images/masjid.png";
import world from "../assests/Images/world.png";
import plus from "../assests/plus.png";
import minus from "../assests/minus.png";

import umrahvisa from "../assests/buttonIcons/umrahvisa.png";

import madina from "../assests/buttonIcons/madina.png";
import mecca from "../assests/buttonIcons/mecca.png";
import dateoftravel from "../assests/buttonIcons/dateoftravel.png";
import returndate from "../assests/buttonIcons/returndate.png";
import passengers from "../assests/buttonIcons/passengers.png";

import city from "../assests/buttonIcons/city.png";



function SearchUmrah() {
    const [input, setinput] = useState("");
    const [todo, settodo] = useState([]);
 
  
    // todo work
  
    const inp = (e) => {
      setinput(e);
    };
  
    const AddTodo = () => {
      settodo([...todo, input]);
  
      setinput("");
    };
  
    console.log(todo);

  return (
    <>


<div className="w-4/5 float-right  bg-[#699FC9]">
        <h1
          id="package_heading"
          className="md:text-3xl  text-lg mt-40  font-bold text-white px-10 md:mt-28"
        >
          Search umrah package
          <br />
          <span
            id="find_Best_deal"
            className="md:text-3xl  text-lg  font-normal"
          >
            Find best deals for umrah trip
          </span>
        </h1>

        {/* Card Section Start */}

        <section class=" body-font">
          <div class="container flex  px-5 py-10 mx-auto">
            <div class="flex flex-wrap justify-evenly -m-2">
              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img src={dateoftravel} alt="..." />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Date of Travel
                    </h2>
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img src={returndate} alt="..." />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Return Date
                    </h2>
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-4 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img src={city} alt="..." />
                  </div>
                  <div class="flex-grow font-bold">
                    <select required>
                      <option value="" selected disabled>
                        Choose your city
                      </option>

                      <option value="">Empty but valid</option>
                      <option value="a-value-here">Fully valid</option>
                    </select>{" "}
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img src={passengers} alt="..." />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Total Passengers
                    </h2>
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img className="h-8 w-8" src={mecca} alt="..." />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Night in Mecca
                    </h2>
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 ">
                    <img src={madina} alt="..." />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Night in Madina
                    </h2>
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60">
                <div class="h-full flex items-center  border p-2.5 bg-white rounded-lg">
                  <div className="   flex justify-center  ">
                    <img className="h-8 w-10" src={umrahvisa} alt="..." />
                  </div>
                  <div class="flex-grow  w-52  h-12 flex justify-between  items-center font-bold   text-black  ">
                    <h2 class="text-gray-900 title-font font-bold">
                      Umrah Visa
                    </h2>

                    <label className="font-normal  text-xs" htmlFor="yes">
                      Yes
                    </label>
                    <input type="radio" name="visa" id="yes" />
                    <label className="font-light text-xs" htmlFor="no">
                      No
                    </label>
                    <input type="radio" name="visa" id="no" />
                  </div>
                </div>
              </div>

              <div class="p-2 h-16 w-60 text-center">
                <div class="h-full flex   border p-2.5 bg-white rounded-lg">
                  <div className="   flex justify-center mr-4 "></div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">Continue</h2>
                  </div>
                </div>
              </div>

              {/* Images */}
            </div>
          </div>
        </section>
      </div>

      {/* Button Section End */}

      {/* Card Section Start */}

      <div className="w-4/5 float-right">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                    <img
                      alt="team"
                      class=" object-contain h-6 w-6 m-auto"
                      src={download}
                    />
                  </div>{" "}
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Download Umrah App
                    </h2>
                    <p class="text-gray-500 text-sm">
                      Find the best deals on our mobile app.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                    <img
                      alt="team"
                      class=" object-contain h-6 w-6 m-auto"
                      src={help}
                    />
                  </div>{" "}
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Help Center
                    </h2>
                    <p class="text-gray-500 text-sm">
                      Connect with our support team
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg ">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                    <img
                      alt="team"
                      class=" object-contain h-6 w-6 m-auto"
                      src={booking}
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-bold">
                      Manage Bookings
                    </h2>
                    <p class="text-gray-500 text-sm">
                      View and manage your bookings{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section End */}

        {/* Special Deal Start */}

        <div className="md:ml-0 ml-5">
          <h1 className=" text-2xl mx-5">Umrah Special deals</h1>
          <p className="  mx-5">
            We provide the best and most affordable services in Pakistan
          </p>

          <section class="text-gray-600 body-font">
            <div class="container px-5 py-6 mx-auto">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/3 ">
                  <img src={masjid} alt="" />
                </div>
                <div class="p-4 sm:w-1/3 ">
                  <img src={haram} alt="" />
                </div>
                <div class="p-4 sm:w-1/3 ">
                  <img src={world} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Special Deal End */}

        {/* Frequently Questions Start */}

        <div className="md:ml-1 ml-5 mt-5 border-[#699FC9] border-l-8">
          <h1 className="text-2xl mx-5">Frequently asked Questions</h1>
          <br />

          <div className="flex float-right md:mr-14 mr-6">
            <button onClick={() => AddTodo()}>
              <img src={plus} alt="" />
            </button>
            <button>
              <img src={minus} alt="" />
            </button>
          </div>

          <br />
          <p className=" mx-5">Why saer.pk</p>

          <input
            type="text"
            value={input}
            onChange={(e) => inp(e.target.value)}
            className="mx-5   outline-none  mt-2 h-20 w-11/12"
            placeholder="Write Your Question Here !"
          />
          <br />

          {todo.map((v, i) => {
            return (
              <>
                <hr className=" border-gray-400 w-6/6 mx-5" />
                <p className="p-5 ml-2">{v}</p>
              </>
            );
          })}

          <br />
          <br />
          <br />
        </div>
      </div>





    </>
  )
}

export default SearchUmrah
