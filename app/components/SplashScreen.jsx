"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';

export default function Splash() {

  const [noCol, setNoCol] = useState(0)
  const [noRow, setNoRow] = useState(0)
  const counter = useRef(0)

  function startLoader() {
    let currentValue = 0
    function updateCounter() { 
      if(currentValue == 100){
        return
      }

      currentValue += Math.floor(Math.random()*10) + 1

      if( currentValue > 100 ){
        currentValue = 100
      }

      if (counter.current) {
      counter.current.innerText = currentValue
      }

      let delay = Math.floor(Math.random()*200) + 50
      setTimeout(updateCounter , delay)
     }
     updateCounter()
  }

  startLoader()



  useEffect(() => {
    // Function to calculate the size of each box
    const calculateBoxSize = () => {
      const squareSize = 100
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      setNoCol(Math.ceil(windowWidth / squareSize))
      setNoRow(Math.ceil(windowHeight / squareSize))

    };

    // Calculate the box size on initial render and window resize
    calculateBoxSize();

  }, []);

  useGSAP(() => {
    // Select all box elements
    const boxes = gsap.utils.toArray(".box");

    // Shuffle the boxes array to randomize the order
    const shuffledBoxes = shuffleArray(boxes);

    // Animate each box to hide it (e.g., set opacity to 0)

    shuffledBoxes.forEach((box, index) => {
      gsap.to(box, {
        opacity: 0,
        delay: 4 + index * 0.01, // Add a small delay between each box
        duration: 0.01, // Animation duration
      });
    })

    gsap.to(".splash",{
      delay:5.5,
      zIndex:-1,
      duration:0
    })



    gsap.to(".counter",{
      opacity:0,
      duration:0.3,
      x:10,
      delay:4,
    })


  }, [noCol, noRow , counter])

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="splash w-screen fixed flex h-screen z-50">
      <h1 ref={counter} className=' counter absolute right-4 bottom-4 text-[10rem] font-bold'>0</h1>
      {[...new Array(noCol).fill(0)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="h-screen w-[100px]  flex flex-col"
        >
          {[...new Array(noRow).fill(0)].map((_, boxIndex) => (
            <div
              key={boxIndex}
              className="box h-[100px] w-full bg-amber-400"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
