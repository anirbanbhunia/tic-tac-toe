import Icon from "../icon/Icon"

function Card({onC,i,val}){
    return(
        <div className="h-[120px] w-[120px] bg-[#ffc103] border-white border-4 rounded-xl flex items-center justify-center shadow-inner shadow-black cursor-pointer" onClick={() => onC(i)}>
            <Icon sym={val}/>
        </div>
    )
}
export default Card