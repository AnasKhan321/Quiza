import React, { useState, useEffect } from 'react'
import Home from './images/home.svg';
import leader from './images/leader.svg';
import pdf from './images/pdf.svg';
import retry from './images/retry.svg';
import share from './images/share.svg';
import view from './images/view.svg';
import { Link ,useNavigate} from "react-router-dom"

const Preview = () => {
    const [points, setpoints] = useState(0);
    const [right, setright] = useState(0);
    const [wrong, setwrong] = useState(0)
    const stylee = {
        height: "40vh"
    }
    const style2 = {
        paddingTop: "34px",
        paddingBottom: "52px"
    }
    const style3 = {
        position: "absolute",
        bottom: "37vh",
        background: "white",
        left: "8.5vw",
    }
    const style4 = {
        position: "absolute",
        bottom: "10vh",
        background: "white",
        right: "8.5vw"
    }

    const style5 = {
        position: "absolute",
        bottom: "-160px ",
        background: "white",

    }

    const dataa = () => {
        let item = localStorage.getItem('right');
        setpoints(parseInt(item) * 10)
        setright(parseInt(item))
        setwrong(10 - parseInt(item))

    }
    useEffect(() => {
        dataa();
    }, [])

    return (
        <>
            <div className="contain flex justify-center items-center flex-col    bg-gradient-to-r from-yellow-400 to-red-200  border rounded-xl" style={stylee}>

                <div className="bg-white  rounded-full flex items-center justify-center flex-col  px-2  " style={style2}>
                    <p className="text-3xl font-bold   text-orange-200">Score  </p>
                    <p className="font-bold text-orange-300  text-6xl">{points}pts  </p>
                </div>



            </div>

            <div className="content w-10/12 mx-auto shadow-2xl py-4 px-8 border rounded-xl border  " style={style3}>
                <div className="one flex justify-between my-4 py-4 ">
                    <div className="three">
                        <div className="con">
                            <div className="flex justify-center items-center ">
                                <div className="back  bg-orange-400 w-2/12 h-3 rounded-full  "></div>

                                <p className="text-orange-500 mx-1 ">100%</p>
                            </div>

                            <p className="font-bold ">Completed </p>
                        </div>
                    </div>

                    <div className="three">
                        <div className="con">
                            <div className="flex justify-center items-center ">
                                <div className="back  bg-orange-400 w-1/12 h-3 rounded-full  "></div>

                                <p className="text-orange-500 mx-1 ">10</p>
                            </div>

                            <p className="font-bold " >Total Questions  </p>
                        </div>
                    </div>


                </div>
                <div className="one flex justify-between my-4 py-4 ">
                    <div className="three">
                        <div className="con">
                            <div className="flex justify-center items-center ">
                                <div className="back  bg-green-700 w-1/12 h-3 rounded-full  "></div>

                                <p className="text-green-700 mx-1 ">{right}</p>
                            </div>

                            <p className="font-bold ">Correct Answer </p>
                        </div>
                    </div>

                    <div className="three">
                        <div className="con">
                            <div className="flex justify-center items-center ">
                                <div className="back  bg-red-600 w-1/12 h-3 rounded-full  "></div>

                                <p className="text-red-700 mx-1 ">{wrong}</p>
                            </div>

                            <p className="font-bold " >Wrong Answer  </p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container flex justify-center left-3 md:left-24 md:justify-between   " style={style4}>

                <div className="flex justify-center flex-col items-center mx-4 md:mx-1  ">
                    <div className="card p-8 rounded-full bg-orange-300 ">
                        <img src={retry} alt="" srcset="" className="md:w-20 w-5  invert" />

                    </div>
                    <p className=" text-sm  md:text-xl ">Play Again </p>
                </div>

                <div className="flex justify-center flex-col items-center mx-4 md:mx-1 ">
                    <div className="card p-8 rounded-full bg-orange-300 ">
                        <img src={view} alt="" srcset="" className="md:w-20 w-5  invert" />

                    </div>
                    <p className="   text-sm  md:text-xl">Review Answer </p>
                </div>


                <div className="flex justify-center flex-col items-center mx-4 md:mx-1 ">
                    <div className="card p-8 rounded-full bg-orange-300 ">
                        <img src={share} alt="" srcset="" className="md:w-20 w-5 invert" />

                    </div>
                    <p className="  text-sm  md:text-xl ">Share Score  </p>
                </div>


            </div>


            <div className="container flex justify-center left-1 md:left-24 md:justify-between   " style={style5}>
                <Link to='/'>
                    <div className="flex justify-center flex-col items-center mx-4 md:mx-1  ">
                        <div className="card p-8 rounded-full bg-orange-300 ">
                            <img src={Home} alt="" srcset="" className="md:w-20 w-5  invert" />

                        </div>
                        <p className=" text-sm  md:text-xl  ">Home  </p>
                    </div>

                </Link>
            <Link to='/board'>
                <div className="flex justify-center flex-col items-center mx-4 md:mx-1 ">
                    <div className="card p-8 rounded-full bg-orange-300 ">
                        <img src={leader} alt="" srcset="" className="md:w-20 w-5  invert" />

                    </div>
                    <p className="text-sm  md:text-xl ">LeaderBoard </p>
                </div></Link>


                <div className="flex justify-center flex-col items-center mx-4 md:mx-1 ">
                    <div className="card p-8 rounded-full bg-orange-300 ">
                        <img src={pdf} alt="" srcset="" className="md:w-20 w-5 invert" />

                    </div>
                    <p className=" text-sm  md:text-xl">Generate Pdf </p>
                </div>


            </div>




        </>

    )
}

export default Preview