// import "./script.js"
import { useState } from 'react';
import Box from './compoents/Box.jsx'
function App() {

  
//  let Boxes = ['', '', '', '', '', '', '', '', ''];
let [Boxes,setBoxes] = useState(['', '', '', '', '', '', '', '', '']);
let [val,setval] = useState('0');

function handleClick(ind){

  if(calWinnwers(Boxes)){
    alert(`${calWinnwers(Boxes)} is  winner of the Game`);
    setBoxes(['', '', '', '', '', '', '', '', '']);
    return;
  }
  
  
  let newBoxes = [...Boxes]
if(newBoxes[ind]===''){
  if(val==='X')
  {
    newBoxes[ind] = 'X';
   setval('0')
  }
  else{
    newBoxes[ind] = '0';
    setval('X');
  }
}

setBoxes(newBoxes);
if(IsTie(newBoxes)){
  alert(`Game is Tie`);
  setBoxes(['', '', '', '', '', '', '', '', '']);
}
  
}
  
function IsTie(Boxes){
  for(let i=0; i<Boxes.length; i++)
  {
    if(Boxes[i]==='')
    return false;
  }
  return true;
}
function calWinnwers(Boxes){
  
  const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

for(let i=0; i<winners.length; i++)
{
  const [a,b,c] = winners[i];
  if(Boxes[a] && Boxes[a]===Boxes[b] &&  Boxes[a]===Boxes[c])
  return Boxes[a];
}
return null;
}


function ResetsVal(){
  setBoxes(['', '', '', '', '', '', '', '', '']);
}
  return (
  
      
    
<div className="flex flex-col items-center justify-center h-screen p-0 m-0 text-center bg-violet-300" >
<h1 className="mb-8 text-3xl font-bold ">Tic-Tac-Toe</h1>
    <p className="hidden p-2 text-white bg-green-900 border-2 shadow-xl outline-none mb-7"> New Game </p>
<div className="grid grid-cols-3 gap-4 ">
<Box onBoxClick={()=> handleClick(0,Boxes)} value =  {Boxes[0]}/>
<Box onBoxClick={()=> handleClick(1,Boxes)} value =  {Boxes[1]} />
<Box onBoxClick={()=> handleClick(2,Boxes)} value =  {Boxes[2]}/>
<Box onBoxClick={()=> handleClick(3,Boxes)} value =  {Boxes[3]}/>
<Box onBoxClick={()=> handleClick(4,Boxes)} value =  {Boxes[4]}/>
<Box onBoxClick={()=> handleClick(5,Boxes)} value =  {Boxes[5]}/>
<Box onBoxClick={()=> handleClick(6,Boxes)} value =  {Boxes[6]}/>
<Box onBoxClick={()=> handleClick(7,Boxes)} value =  {Boxes[7]}/>
<Box onBoxClick={()=> handleClick(8,Boxes)} value =  {Boxes[8]}/>


</div>

<button className='p-2 mt-10 bg-green-500 rounded-md'  onClick={ResetsVal}>Reset</button>

</div>

  )
}

export default App
