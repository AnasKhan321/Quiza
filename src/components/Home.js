import React from 'react'
import space from './images/space.svg';
import sport from './images/sport.svg';
import history from './images/history.svg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="contain    bg-gradient-to-r from-yellow-400 to-red-200  rounded-2xl  ">
        <div className="user flex justify-around    items-center py-4  ">
          <span className="text-white font-bold ">Hello Anas !</span>
          <img className="h-10  border-2  border-gray-100 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
        </div>
        <p className="text-center font-bold text-2xl my-4 text-white  ">Popular</p>
        <div className="cards flex  py-6 justify-center  ">

          <div
            className="card mx-2   bg-white  py-2 flex justify-center flex-col items-center  shadow-lg p-8   md:mx-6   rounded-lg  w-4/12  md:w-3/12   ">
            <p className="my-2 font-bold ">Space</p>

            <Link className="flex justify-center " to='/space'>   <img src={space} alt="" className="md:w-6/12  w-12/12" /> </Link>

          </div>
          <div
            className="card  mx-2  bg-white flex justify-center flex-col items-center  md:mx-6   w-4/12  md:w-3/12 shadow-lg p-8 rounded-lg   py-2 ">
            <p className="my-2 font-bold ">Sports</p>
            <Link className="flex justify-center " to='/sports'>   <img src={sport} alt="" className="md:w-6/12  w-12/12 " /> </Link>

          </div>

          <div
            className="card  mx-2   bg-white flex justify-center flex-col items-center  md:mx-6   w-4/12  md:w-3/12 shadow-lg p-8 rounded-lg   py-2 ">
            <p className="my-2 font-bold ">History</p>
            <Link className="flex justify-center " to='/history'>   <img src={history} alt="" className="md:w-6/12  w-12/12" /> </Link>

          </div>
        </div>

      </div>


      <div className="contain2 w-5/6 mx-auto my-8  ">
        <div className="flex justify-around  ">
          <p className="font-bold text-xl ">Explore </p>
          <p>View all </p>
        </div>

       


        
        <div className="cards flex  py-6 justify-center  ">


          <div
            className="card  mx-2  bg-white  cursor-pointer hover:shadow-2xl    py-2 flex justify-center flex-col items-center mx-6 shadow-xl   p-8  rounded-lg  border   w-4/12  md:w-3/12">
            <p className="my-2 font-bold ">Space</p>
            <Link className="flex justify-center " to='/space'>   <img src={space} alt="" className="w-12/12 md:w-6/12 " /> </Link>
           
          </div>
          <div
            className="card  mx-2  bg-white  cursor-pointer hover:shadow-2xl   flex justify-center flex-col items-center  w-4/12  md:w-3/12  mx-6 shadow-xl   p-8 rounded-lg border  py-2 ">
            <p className="my-2 font-bold ">Sports</p>
            <Link className="flex justify-center " to='/sports'>   <img src={sport} alt="" className="w-6/12" /> </Link>

          </div>

          <div
            className="card  mx-2   bg-white cursor-pointer hover:shadow-2xl    flex justify-center flex-col items-center  w-4/12  md:w-3/12 mx-6 shadow-xl  border  p-8 rounded-lg   py-2 ">
            <p className="my-2 font-bold ">History</p>
            <Link className="flex justify-center " to='/history'>   <img src={history} alt="" className="w-6/12" /> </Link>

          </div>
        </div>
      </div>

    </>
  )
}

export default Home