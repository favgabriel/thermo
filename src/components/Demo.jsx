import { useCallback, useEffect, useRef, useState } from 'react'
import InputPeriod from './InputPeriod'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
// import { dataset } from '../assets';

const Demo = () => {
  const [temp,setTemp]= useState([]);
  const dateref = useRef("")
  const [period, setPeriod]=useState("")
  
  const timesperiod = useCallback(async ()=>{
    //fetch the data based on the time period selected by the user.
    axios("dataset").then((res)=>{
      setTemp(res.data)
    }).catch((err)=>{
      window.alert(err)
    })
    
  },[])

  useEffect(()=>{
    timesperiod()
  },[timesperiod,period])

  return (
    <section className='w-full flex flex-col justify-normal items-center p-10'>
        <div className="flex-row flex-1 ">
            <InputPeriod refer={dateref} onChange={(newVal)=>{
                setPeriod(newVal)
            }}/>
        </div>
        <div className="border border-solid mt-5 w-full rounded-xl">
            <div className="h-[760px] flex-col">
                <p className='text-white p-6 text-[22px]'>GreenHouse Temperature Recordings: <span className='text-[16px]'>{period.replace("T"," ")}</span></p>
                <Line data={temp}/>
            </div>
        </div>
    </section>
  )
}

export default Demo