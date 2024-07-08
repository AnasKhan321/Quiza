import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
const History = () => {
  const navigate = useNavigate();
  const [data1, setdata1] = useState([]);
  const [question, setquestion] = useState({});
  const [questionno, setquestionno] = useState(0);
  const [right, setright] = useState(0);
  const [wrong, setwrong] = useState(0);
  const [answer, setanswer] = useState(''); 
  const [disable1, setdisable1] = useState(true); 
  const [message, setmessage] = useState(''); 
  const [class1, setclass1] = useState(''); 
  const [time1, settime1] = useState(60)
  const fetchData = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple');
    if(res.ok){
      const data = await res.json();
      await setdata1(data.results)
      if (data && data.results && data.results.length > 0) {
        setquestion(data.results[0]);
      } else {
        // Handle the case where data or data.results is undefined or empty
        console.log("No results found or data is undefined");
      }
    }
 


  }
  const stylee = {
    height: "40vh"
  }
  const style2 = {
    position: "absolute",
    bottom: "22vh ",
    left: "12vw"

  }

  const style3 = {
    bottom: "2vh",
    left: "12vw"
  }

  const handleClick = () => {
    console.log(data1)

    if (questionno > 8) {
      localStorage.setItem('right' , right); 
      navigate('/preview')
      
    }
    else {
      if (data1 && data1.length > questionno + 1) {
        setquestion(data1[questionno + 1])
        setquestionno(questionno + 1)
        setdisable1(true)
        setmessage('')
      } else {
        // Handle the case where data1 is undefined or there are no more questions
        console.log("No more questions available or data1 is undefined");
      }
    }
  }
  let  time2 = 60 ; 

  const handleChange = (e)=>{
    setdisable1(false)
    setanswer(e.target.value)
    console.log(e.target.value )
  }

  const handleClick2 = ()=>{
    if(answer == question.correct_answer){
      console.log('yeh you are right ')
      setmessage("Right Answer ! ")
      setclass1('text-green-400')
      setright(right+1)
    }
    else{
      console.log('You are wrong ')
      setmessage("Wrong Answer !")
      setclass1('text-red-600')
      setwrong(wrong+1)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <div>
        <div className="contain bg-gradient-to-r from-yellow-400 to-red-200  border rounded-xl    " style={stylee}>
        
        </div>

      

        <div className="data w-9/12 mx-auto bg-white rounded-3xl  shadow-2xl p-4   " style={style2}>
          <div className="flex justify-between ">
            <p className="text-green-500">{right} </p>
            <p className="text-red-500">{wrong}</p>
          </div>

          <div className="contain text-center text-yellow-500 font-bold my-4   ">
            <p>Question {questionno + 1}/10 </p>
          </div>

          <div className="question text-center font-bold my-4 ">
            <p className="text-sm  md:text-xl ">{question?.question} </p>
          </div>

          <div className="options my-8 p-4  ">


            {question?.incorrect_answers?.map((e,i) => {
              return (
                <div className="option flex justify-between  my-8  " key={i}>
                  <p className="font-bold ">{e} </p>
                  <input type="radio" value={e} name="radio" id="" className="text-2xl w-2/12 accent-yellow-500 rounded-full  " onChange={handleChange} />
                </div>

              )
            })}

            <div className="option flex justify-between  my-8  ">
              <p className="font-bold ">{question?.correct_answer} </p>
              <input type="radio" value={question?.correct_answer} name="radio" id="" className="text-2xl w-2/12 accent-yellow-500 rounded-full  "  onChange={handleChange}/>
            </div>

            <div className="button flex justify-center items-center my-4 ">
              <button disabled={disable1} className=" disabled:opacity-50 bg-gradient-to-r from-yellow-400 to-red-200   py-2 text-white px-4 rounded-md   border "  onClick={handleClick2}> Submit </button>
            </div>

            <p className={`text-center ${class1} `} >{message} </p>

          </div>

        </div>

      </div>

      <div className="buttons flex absolute bottom-0  justify-between w-9/12  mx-auto   " style={style3}>
        <button className=" bg-gradient-to-r from-yellow-400 to-red-200   py-2 text-white px-4 rounded-md   border "> &lt;  Previouse  </button>
        <button className=" bg-gradient-to-r from-yellow-400 to-red-200   py-2 text-white px-4 rounded-md   border " onClick={handleClick} >Next &gt;</button>

      </div>

      

    </>
  )
}

export default History