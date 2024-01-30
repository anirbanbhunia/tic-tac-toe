import { useState } from "react";
import Card from "./components/Card/Card";
import Headline from "./components/headline/Headline";
import Button from "./components/Button/Button";

function App() {
  const[cardArr,setCardArr] = useState(Array(9).fill(""))
  const[turn,setTurn] = useState(true)
  const[machine,setMachine] = useState(false)
  function press(idx){
    if(cardArr[idx] == "" && logic() == false){
      setTurn(!turn)
      let arr = cardArr;
      if(turn == true){
        arr[idx] = "X"
        setCardArr(arr)
      } 
      else if (turn == false){
        arr[idx] = "O"
        setCardArr(arr)
      }   
      // else cardArr[idx] = ""
      
      console.log(idx)
    }
  }
  if(turn == false){
    let arr = []
    let arr2 = cardArr
    arr2.filter((x,i)=>x == "").map((x,i)=>i).forEach((x)=>arr.push(x))
    console.log(arr[0])
    press(arr[0])
  } 
  function logic(){
    let res = false
    if(cardArr[0] == cardArr[1] && cardArr[1] == cardArr[2] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[0]
    else if(cardArr[2] == cardArr[1] && cardArr[1] == cardArr[0] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[0]
    if(cardArr[3] == cardArr[4] && cardArr[4] == cardArr[5] && (cardArr[3]=="X"||cardArr[3]=="O")) res = cardArr[5]
    else if(cardArr[5] == cardArr[4] && cardArr[4] == cardArr[3] && (cardArr[3]=="X"||cardArr[3]=="O")) res = cardArr[3]
    if(cardArr[6] == cardArr[7] && cardArr[7] == cardArr[8] && (cardArr[6]=="X"||cardArr[6]=="O")) res = cardArr[8]
    else if(cardArr[8] == cardArr[7] && cardArr[7] == cardArr[6] && (cardArr[8]=="X"||cardArr[8]=="O")) res = cardArr[8]
    if(cardArr[0] == cardArr[3] && cardArr[3] == cardArr[6] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[6]
    else if(cardArr[6] == cardArr[3] && cardArr[3] == cardArr[0] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[6]
    if(cardArr[1] == cardArr[4] && cardArr[4] == cardArr[7] && (cardArr[1]=="X"||cardArr[1]=="O")) res = cardArr[1]
    else if(cardArr[7] == cardArr[4] && cardArr[4] == cardArr[1] && (cardArr[7]=="X"||cardArr[7]=="O")) res = cardArr[1]
    if(cardArr[2] == cardArr[5] && cardArr[5] == cardArr[8] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[2]
    else if(cardArr[8] == cardArr[5] && cardArr[5] == cardArr[2] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[2]
    if(cardArr[2] == cardArr[4] && cardArr[4] == cardArr[6] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[6]
    else if(cardArr[6] == cardArr[4] && cardArr[4] == cardArr[2] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[6]
    if(cardArr[0] == cardArr[4] && cardArr[4] == cardArr[8] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[8]
    else if(cardArr[8] == cardArr[4] && cardArr[4] == cardArr[0] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[8]
    console.log(res)
    return res
  }
  function resetAll(){
    cardArr.fill("")
    setCardArr([...cardArr])
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <h1 className="text-white text-4xl font-semibold"><Headline currTurn={turn} currLogic={logic()}/></h1>
        <div className="flex h-[400px] w-[400px] flex-wrap gap-x-3 mt-5">
          {cardArr.map((el,idx)=> <Card key={idx} onC={press} i={idx} val={el}/>)}
        </div>
      </div>
      {logic() != false ? <Button onC={resetAll}/>:null}
    </div>
  );
}

export default App;
