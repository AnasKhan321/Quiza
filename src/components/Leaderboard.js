import React from 'react'

const Leaderboard = () => {

  
  const stylee = {
    height: "60vh"
  }
  const style1 = {
    position: "absolute",
    bottom: "58vh",
    left: "45vw"
  }
  const style2 = {
    position: "absolute",
    bottom: "55vh",
    left: "75vw"
  }
  const style3 = {
    position: "absolute",
    bottom: "50vh",
    left: "15vw"
  }
  const style4 = {
    position: "absolute",
    width: "100vw",
    bottom: "14vh",
    background: "white"
  }
  return (
    <>
      <div className="contain     bg-gradient-to-r from-yellow-400 to-red-200  border rounded-xl" style={stylee}>
        <div className=" flex  justify-end">
        <img className="h-14  border-2 my-2   border-gray-100 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
        </div>
  
        <div className="flex justify-around my-4 text-white md:text-2xl font-bold items-center text-md  ">
          <p>Today</p>
          <p>This Month</p>
          <p>This Year </p>
     
        </div>
        <div className="one flex items-center flex-col " style={style1}>
          <img className="h-14  border-2 my-2   border-gray-100 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
          <p className="text-white text-7xl p-4 bg-orange-200 ">1</p>
          <p className="text-white text-2xl ">700pts </p>
        </div>

        <div className="one flex items-center flex-col " style={style2}>
          <img className="h-14  border-2 my-2   border-gray-100 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
          <p className="text-white text-7xl p-4 bg-orange-200 ">2</p>
          <p className="text-white text-2xl ">560pts </p>
        </div>

        <div className="one flex items-center flex-col " style={style3}>
          <img className="h-14  border-2 my-2   border-gray-100 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
          <p className="text-white text-7xl p-4 bg-orange-200 ">3</p>
          <p className="text-white text-2xl ">543pts </p>
        </div>


      </div>

      <div className="cards shadow-lg rounded-xl "  style={style4}>
        <div className="card flex justify-around items-center my-2  ">
          <p>04</p>
          <img className="h-14 border-2 my-2 border-gray-100 rounded-full " src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256" alt="" />
          <p>Moni </p>
          <p className="px-4 py-2 bg-yellow-300  rounded-xl  ">433pts</p>
        </div>
        <div className="card flex justify-around items-center my-2  ">
          <p>05</p>
          <img className="h-14 border-2 my-2 border-gray-100 rounded-full " src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256" alt="" />
          <p>Alex  </p>
          <p className="px-4 py-2 bg-yellow-300  rounded-xl  ">423pts</p>
        </div>
        <div className="card flex justify-around items-center my-2   ">
          <p>06</p>
          <img className="h-14 border-2 my-2 border-gray-100 rounded-full " src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256" alt="" />
          <p>Carey  </p>
          <p className="px-4 py-2 bg-yellow-300  rounded-xl  ">412pts</p>
        </div>
      </div>
    </>



  )
}

export default Leaderboard