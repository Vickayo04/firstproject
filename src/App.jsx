import Navbar from "./components/Navbar/Navbar"
import InputComponent from "./components/Background/Background";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero/Hero";



function App() {
let heroData = [
  {text1:"Dive Into",text2:"what you love"},
  {text1:"Indulge",text2:"your passions"},
  {text1:"Give in to",text2:"your passions"},
]
const [heroCount,setHeroCount] = useState(0);
const [playStatus,setPlayStatus] = useState(false);

useEffect(()=>{
  setInterval(() => {
    setHeroCount((count) => {return count===2?0:count+1})
  }, 3000);
},[])

  return (
    <>
    <Navbar/>
    <InputComponent playStatus={playStatus} heroCount={heroCount}/>
    <Hero 
    setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    />
    </>
  )
}

export default App
