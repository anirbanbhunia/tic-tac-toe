import { FaCircle, FaCross, FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
function Icon({sym}){
    if(sym == "X") return <FaTimes className="text-4xl"/>
    else if(sym == "O") return <FaRegCircle className="text-4xl"/>
    else return <FaPen className="text-4xl"/>
}
export default Icon