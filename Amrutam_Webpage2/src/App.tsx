import image1 from './assets/Ellipse 725.png'; 
import image2 from './assets/image 160.png'; 
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosStar } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiCapsuleLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import Location from "./components/Location";
import Expertise from "./components/Expertise";
import Gender from "./components/Gender"
import Fees from "./components/Fees"
import Languages from "./components/Languages"
function App() {
  return (
    <div>
      <div className="w-full h-20 bg-yellow-100">
        <div className="w-auto h-auto ml-10 flex justify-around">
          <div>
            <h1 className="text-4xl text-green-800 font-semibold mt-3">AMRUTAM</h1>
          </div>
          <div className="flex justify-center items-center mt-3">
            <div className="cursor-pointer transition ease-out hover:scale-105">Home</div>
            <div className="font-bold text-green-800 mx-10 cursor-pointer transition ease-out hover:scale-105">Find Doctors</div>
            <div className="cursor-pointer transition ease-out hover:scale-105">About Us</div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <div className="text-green-800 mr-8 border border-green-800 inline-block w-20 h-8 rounded-xl pl-4 cursor-pointer transition ease-out hover:scale-110">Login</div>
            <div className="bg-green-800 rounded-xl w-20 h-8 pl-3 text-white cursor-pointer transition ease-out hover:scale-110">Sign-up  </div>
          </div>
        </div>
      </div>

      <div className="items-center border h-auto bg-gray-100 py-10 md:py-20" style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <h1 className="font-poppins text-center text-black text-3xl md:text-5xl lg:text-4xl font-medium">Find Expert Doctors For An In-Clinic Session Here</h1>
        <div className="flex items-center justify-center mt-8">
        <div className="flex bg-white border-2 border-gray-400 items-center space-x-3 ">
      <div className="text-green-800">
        <FaLocationDot size={24} />
      </div>

      <div className="text-gray-600 text-sm font-medium  w-full">
      <Location />
      </div>
    </div>
          <div className="ml-4 w-84">
            <div className="relative">
              <input type="text" placeholder="eg. Doctor, specialisation, clinic name " className="w-96 h-12 border-2 border-gray-400 rounded-lg"/>
              <i className="absolute left-3 top-3 ml-80 ">
                <FaArrowRight size={30}/>
              </i>
            </div>
          </div>
        </div>
      </div>



      
      <div className="flex mt-8 justify-evenly">
          <div className="flex bg-gray-300 text-gray-500 rounded-lg p-2 h-14 font-medium w-50 justify-between cursor-pointer transition ease-out transform hover:scale-105 ">
              <div><Expertise/></div>
              
          </div>
          <div className="flex bg-gray-300 text-gray-500 rounded-lg p-2  h-14 font-medium w-50 justify-between cursor-pointer transition ease-out transform hover:scale-105">
            <Gender/>
          </div>
          <div className="flex bg-gray-300 text-gray-500 text-center rounded-lg p-2 h-14 font-medium w-56 justify-between cursor-pointer transition ease-out transform hover:scale-105">
              <Fees/>
          </div>
          <div className="flex bg-gray-300 text-gray-500 rounded-lg p-2 h-14 font-medium w-56 justify-between cursor-pointer transition ease-out transform hover:scale-105 z-50">
              <Languages/>
          </div>
          <div className="flex bg-green-200 text-green-500 rounded-lg p-2 h-12 font-medium w-56 justify-between cursor-pointer transition ease-out transform hover:scale-105">
              <div>All filters</div>
              <div className="ml-4 ">
              <MdKeyboardArrowDown size={30}/>
              </div>
        </div>
    </div>


    <div className=" mt-4  w-full flex h-0 border border-gray-300 border-opacity-50 "></div>



    <div className="flex justify-end mt-10 pr-24 ">
    <div className="flex  bg-green-100 p-2 rounded-2xl justify-center items-center cursor-pointer transition ease-out transform hover:scale-105 mx-4">
        <div>Hair Care</div>
        <div className="text-gray-500 font-semibold ml-2">
            <RxCross2 size={20}/>
        </div>
    </div>
    <div className="flex bg-green-100 p-2 rounded-2xl justify-center items-center cursor-pointer transition ease-out transform hover:scale-105 mx-4">
        <div>Female</div>
        <div className="text-gray-500 font-semibold ml-2">
            <RxCross2 size={20}/>
        </div>
        
    </div>
    <div className="flex bg-green-100 p-2 rounded-2xl justify-center items-center cursor-pointer transition ease-out transform hover:scale-105 mx-4">
        <div>Rs.0-Rs.500</div>
        <div className="text-gray-500 font-semibold ml-2">
            <RxCross2 size={20}/>
        </div>
    </div>
    <div className="flex bg-green-100 p-2 rounded-2xl justify-center items-center cursor-pointer transition ease-out transform hover:scale-105 mx-4">
        <div>Hindi</div>
        <div className="text-gray-500 font-semibold ml-2">
            <RxCross2 size={20}/>
        </div>
    </div>
</div>





<div className="flex mt-16 justify-start">
    <div className="bg-yellow-100 rounded-xl w-96 h-120 ml-32 mb-96">
        <div className="relative mt-8">
           <img src={image1} alt="" className='ml-32'/>
            <div className="bg-black rounded-3xl p-2 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-medium flex justify-center items-center mt-6 w-20 ml-2 h-8">
                <p className="text-white">4.5</p>
                <p className="text-yellow-400 ml-1">
                   <IoIosStar/>
                </p>
            </div>
        </div>
        <div className="flex justify-center items-center mt-6">
            <p className="text-3xl font-semibold">Dr. Prerna Narang</p>
        </div>
        <div className="flex mt-4 justify-center items-center">
            <div className="text-green-800">
                <RiCapsuleLine/>
            </div>
            <div className="ml-4 text-gray-600">Male-Female Infertility</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <RiGraduationCapLine/>
            </div>
            <div className="ml-4 text-gray-600 font-medium">Years Of Experience</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <BiMessageDetail/>
            </div>
            <div className="ml-4 text-gray-600">Speaks: English, Hindi, Marathi</div>
        </div>
        <div className="flex justify-center items-center mt-4">
            <div className="border-2 border-gray-500 p-2 rounded-lg cursor-pointer transition ease-out hover:scale-105">
                <p>Video Consultation</p>
                <div className="flex justify-center items-center text-green-800">
                    <p>
                       <MdOutlineCurrencyRupee/> 
                    </p>
                    <p>800</p>
                </div>
            </div>
            <div className="border-2 border-gray-500 p-2 rounded-lg ml-2 cursor-pointer transition ease-out hover:scale-110">
                <p className="">Chat Consultation</p>
                <p className="ml-12 text-green-800 font-medium">Free</p>
            </div>
        </div>
        <button className="text-2xl bg-white border-2 border-green-800 mt-8 ml-8 w-80 h-12 rounded-lg cursor-pointer transition ease-out hover:scale-110">View Profile</button>
        <button className="text-2xl text-white bg-green-800 mt-2 ml-8 w-80 rounded-lg h-12 mb-8 cursor-pointer transition ease-out hover:scale-110">Book a Consultation</button>
    </div>
    <div className="bg-yellow-100 rounded-xl w-96 h-120 ml-12 mb-96">
        <div className="relative mt-8">
           <img src={image1} alt="" className='ml-32'/>
            <div className="bg-black rounded-3xl p-2 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-medium flex justify-center items-center mt-6 w-20 ml-2 h-8">
                <p className="text-white">4.5</p>
                <p className="text-yellow-400 ml-1">
                   <IoIosStar/>
                </p>
            </div>
        </div>
        <div className="flex justify-center items-center mt-6">
            <p className="text-3xl font-semibold">Dr. Prerna Narang</p>
        </div>
        <div className="flex mt-4 justify-center items-center">
            <div className="text-green-800">
                <RiCapsuleLine/>
            </div>
            <div className="ml-4 text-gray-600">Male-Female Infertility</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <RiGraduationCapLine/>
            </div>
            <div className="ml-4 text-gray-600 font-medium">Years Of Experience</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <BiMessageDetail/>
            </div>
            <div className="ml-4 text-gray-600">Speaks: English, Hindi, Marathi</div>
        </div>
        <div className="flex justify-center items-center mt-4">
            <div className="border-2 border-gray-500 p-2 rounded-lg cursor-pointer transition ease-out hover:scale-105">
                <p>Video Consultation</p>
                <div className="flex justify-center items-center text-green-800">
                    <p>
                       <MdOutlineCurrencyRupee/> 
                    </p>
                    <p>800</p>
                </div>
            </div>
            <div className="border-2 border-gray-500 p-2 rounded-lg ml-2 cursor-pointer transition ease-out hover:scale-110">
                <p className="">Chat Consultation</p>
                <p className="ml-12 text-green-800 font-medium">Free</p>
            </div>
        </div>
        <button className="text-2xl bg-white border-2 border-green-800 mt-8 ml-8 w-80 h-12 rounded-lg cursor-pointer transition ease-out hover:scale-110">View Profile</button>
        <button className="text-2xl text-white bg-green-800 mt-2 ml-8 w-80 rounded-lg h-12 mb-8 cursor-pointer transition ease-out hover:scale-110">Book a Consultation</button>
    </div>
    <div className="bg-yellow-100 rounded-xl w-96 h-120 ml-12 mb-96">
        <div className="relative mt-8">
           <img src={image1} alt="" className='ml-32'/>
            <div className="bg-black rounded-3xl p-2 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-medium flex justify-center items-center mt-6 w-20 ml-2 h-8">
                <p className="text-white">4.5</p>
                <p className="text-yellow-400 ml-1">
                   <IoIosStar/>
                </p>
            </div>
        </div>
        <div className="flex justify-center items-center mt-6">
            <p className="text-3xl font-semibold">Dr. Prerna Narang</p>
        </div>
        <div className="flex mt-4 justify-center items-center">
            <div className="text-green-800">
                <RiCapsuleLine/>
            </div>
            <div className="ml-4 text-gray-600">Male-Female Infertility</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <RiGraduationCapLine/>
            </div>
            <div className="ml-4 text-gray-600 font-medium">Years Of Experience</div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <div className="text-green-800">
                <BiMessageDetail/>
            </div>
            <div className="ml-4 text-gray-600">Speaks: English, Hindi, Marathi</div>
        </div>
        <div className="flex justify-center items-center mt-4">
            <div className="border-2 border-gray-500 p-2 rounded-lg cursor-pointer transition ease-out hover:scale-105">
                <p>Video Consultation</p>
                <div className="flex justify-center items-center text-green-800">
                    <p>
                        <MdOutlineCurrencyRupee/>
                    </p>
                    <p>800</p>
                </div>
            </div>
            <div className="border-2 border-gray-500 p-2 rounded-lg ml-2 cursor-pointer transition ease-out hover:scale-110">
                <p className="">Chat Consultation</p>
                <p className="ml-12 text-green-800 font-medium">Free</p>
            </div>
        </div>
        <button className="text-2xl bg-white border-2 border-green-800 mt-8 ml-8 w-80 h-12 rounded-lg cursor-pointer transition ease-out hover:scale-110">View Profile</button>
        <button className="text-2xl text-white bg-green-800 mt-2 ml-8 w-80 rounded-lg h-12 mb-8 cursor-pointer transition ease-out hover:scale-110">Book a Consultation</button>
    </div>
</div>




    </div>
  );
}

export default App;