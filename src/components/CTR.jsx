import { Link} from "react-router-dom"

const CTR = props => {
  return (
    <Link to="/demo">
      <button className={`p-4 text-white rounded-md text-center mr-7 bg-blue-700 w-[120px] box shadow-lg hover:bg-gray-700 border border-blue-700  ${props.styles}`}>
        {props.text!=null ? props.text :"Try Demo"}
    </button>
    </Link>
  )
}

export default CTR