"use client"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroSection() {

  const [boxes, setBoxes] = useState(0)
  const [noCols, setNoCols] = useState(0)
  const [noRows, setNoRows] = useState(0)



  useEffect(() => {
    function calculateNumberOfBoxes() {

      const boxSize = 50
      const screenHeight = window.innerHeight
      const screenWidth = window.innerWidth

      const noOfBoxes = Math.floor((screenHeight / boxSize) * (screenWidth / boxSize))

      setBoxes(noOfBoxes)
      setNoCols(screenWidth / boxSize)
      setNoRows(screenHeight / boxSize)


    }
    calculateNumberOfBoxes()
  }, [boxes, noCols, noRows])

  function highlightRandomNeigbors(e) {
    const box = e.target
    const index = parseInt(e.target.dataset.index)
    const neigbors = [
      index - 1,
      index + 1,
      index - noCols,
      index + noCols,
      index - noCols + 1,
      index - noCols - 1,
      index + noCols + 1,
      index + noCols - 1,
    ].filter((i) =>
      i >= 0 &&
      i < boxes &&
      Math.abs((i%noCols) - (index-noCols)) <= 1
    )


    box.classList.add("highlight")
    setTimeout(() => { box.classList.remove("highlight") }, 500)

    shuffleArray(neigbors)
      .slice(0, 1)
      .forEach(nIndex => {
        const neighborBox = document.querySelector(".boxes").children[nIndex];
        if ( neighborBox){
          neighborBox.classList.add("highlight")
          setTimeout(() => { neighborBox.classList.remove("highlight") }, 500)
        }

      });

    function shuffleArray(array) {
      let shuffledArray = [...array]; // Create a copy to avoid mutating the original
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap
      }
      return shuffledArray;
    }

  }





  return (
    <section className="relative overflow-hidden ">

      <div className="boxes absolute -left-[2.5%]  h-screen w-[105vw] flex justify-start content-start flex-wrap gap-0">
        {Array.from({ length: boxes }, (_, i) => (
          <div key={i} className="w-[50px] h-[50px] border-[1px] border-gray-900 block" data-index={i} onMouseMove={highlightRandomNeigbors}></div>
        ))}
      </div>



      <div className="bg-black text-white">
        <div className=" h-screen px-12 container flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          <div className="space-y-6 max-w-md text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
              Summer <span className="text-amber-400">Collection</span>
            </h1>
            <p className="text-lg text-gray-300 relative z-10">
              Discover our latest arrivals with up to 40% off on selected items. Limited time offer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black relative z-10">Shop Now</Button>
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10 relative z-10">
                Explore Collections
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-lg">
            <Image
              width="400"
              height="400"
              className="rounded-lg object-cover"
              src="/yellow-shirt.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

