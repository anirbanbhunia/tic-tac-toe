function Button({onC}){
    return(
        <button className="bg-white px-5 py-1 rounded-2xl text-center font-bold active:bg-yellow-200" onClick={onC}>Reset</button>
    )
}
export default Button