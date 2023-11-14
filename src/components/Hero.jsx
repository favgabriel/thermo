import CTR from './CTR'
import { farm } from '../assets'
import Waitlist from './Waitlist'

const Hero = () => {
  return (
    <section className='w-full flex flex-col justify-between'>
        <div className='flex md:flex-row flex-col justify-between'>
          <div className='flex-col p-10'>
            <h1 className='text-white md:text-[56px] text-[33px] font-poppins font-semibold sm:w-[612px] w-full justify-start'>
                Get Realtime Temperature Readings From Large Acre Of Farm Lands
            </h1>
        <CTR styles='items-center'/>
        </div>
       <img src={farm} className='h-[528px] sm:w-[600px] w-full mr-10 p-4 object-contain rounded-[25px] justify-end' alt='farm'/>
        </div>
        <Waitlist/>
        
    </section>
  )
}

export default Hero