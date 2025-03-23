"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { ScrollTrigger } from "gsap/all"


export default function CategorySection() {

  const categories = [
    { name: "T-shirts", image: "/category/shirt.jpeg", link: "#" },
    { name: "Shoes", image: "/category/shoes.jpeg", link: "#" },
    { name: "pantlons", image: "/category/pantlon.jpeg", link: "#" },
    { name: "Caps", image: "/category/cap.jpeg", link: "#" },
  ]

 const startRotations = [0,5,0,5]
 const endRotations = [-10 ,-5 ,10, 5] 

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".category-link").forEach(card => {
      gsap.set(card , {
        x:"50%",
      })
    })
  
    ScrollTrigger.create({
      trigger:".pinned-section",
      start:" top top",
      end: `+=${window.innerHeight * categories.length}px`,
      pin:true,
      pinSpacer: true,
      onUpdate: (self) => {
        const progress = self.progress *  categories.length;
        const currentCard = Math.floor(progress)

        gsap.utils.toArray(".category-link").forEach((card , index)=> {
          if(index < currentCard){
            gsap.set(card , {
              top:"50%",
              rotate:endRotations[index],
              x:"50%",
              y:"-50%",
            })
          }
          else if(index === currentCard){
            const cardProgress = progress - currentCard
            const newTop = gsap.utils.interpolate(150,50,cardProgress)
            const newRoation = gsap.utils.interpolate(startRotations[index],endRotations[index],cardProgress)
            gsap.set(card , {
              top: `${newTop}%`,
              rotate:newRoation,
              x:"50%",
              y:"-50%",
            })
          } else {
            gsap.set( card , {
              top:"150%",
              rotate:startRotations[index],
              x:"50%",
              y:"-50%",
            })
          }
        })

      }
    })

  }, [])

  return (
   
    <section className="pinned-section py-1 relative bg-gray-50 min-h-screen"> 
        <h2 className=" title text-[5rem] absolute right-1/2 top-1/2 transform translate-x-1/2 font-bold text-center mb-12">
          Shop by <span className="text-amber-500">Category</span>
        </h2>
        <div>
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={index}
              className=" category-link absolute top-[150%] right-1/2 bg-amber-600  w-1/2 md:w-[500px]  h-[400px] overflow-hidden border-4 border-amber-500 transition-transform hover:scale-105"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end w-full">
                <h3 className="text-white text-xl  font-semibold bg-amber-500 w-full p-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
    </section>
  )
}

