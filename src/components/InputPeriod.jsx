
const InputPeriod = ({refer,onChange}) => {
  return (
    <>
    <div className='flex flex-row h-26 bg-white justify-normal items-center p-4 rounded-xl'>
        <label htmlFor="pl" className='text-[18px] mr-2'>Enter Period:</label>
        <input id="pl" ref={refer} type='datetime-local' onChange={(event)=>onChange(event.target.value)} />
    </div>
    </>
  )
}

export default InputPeriod