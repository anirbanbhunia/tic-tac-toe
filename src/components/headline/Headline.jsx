import Button from "../Button/Button"

function Headline({currTurn,currLogic}){
    if(currLogic == false){
        return(
            <span>Current turn: &nbsp;{currTurn?"X":"O"}</span>
        )
    }else{
        return(
            <>
                <span>Winner is: &nbsp;{currLogic}</span>
            </>
        )
    }
}
export default Headline