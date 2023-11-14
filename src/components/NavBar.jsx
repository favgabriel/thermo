import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HashLink as Link } from "react-router-hash-link"
const NavBar = () => {
  return (
    <nav className='w-full bg-primary py-6 justify-between flex flex-row items-center navbar'>
      
        <Link to="/"><h1 className='md:text-[27px] text-[22px] text-white'>Ther<span className="text-red-700">mo</span> <FontAwesomeIcon icon="thermometer"/></h1></Link>
        <Link to="/.#waitlist">
        <button className='w-[100px] border border-solid border-white bg-transparent text-white p-2 rounded-[15px] justify-end'>
            Sign in
        </button>
        </Link>
    </nav>
  )
}

export default NavBar