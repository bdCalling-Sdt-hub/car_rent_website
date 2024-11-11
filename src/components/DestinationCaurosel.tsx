import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import img from '../assets/des1.png'
import img2 from '../assets/des2.png'
import img3 from '../assets/des3.png'
import img4 from '../assets/des4.png'
import Image from "next/image"

const DestinationCaurosel = () => {
  return (
    <div className="mt-10">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/4">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                            <Image src={img} height={500} className="h-36 w-36 mx-auto" width={500} alt='img' />
                            <p className="text-xl py-2">London</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4">
                    <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                            <Image src={img2} height={500} className="h-36 w-36 mx-auto" width={500} alt='img' />
                            <p className="text-xl py-2">Manchester</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4">
                    <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center  hover:shadow-lg py-4">
                            <Image src={img3} height={500} className="h-36 w-36 mx-auto" width={500} alt='img' />
                            <p className="text-xl py-2">Birmingham</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4">
                    <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                            <Image src={img4} height={500} className="h-36 w-36 mx-auto" width={500} alt='img' />
                            <p className="text-xl py-2">Bristol</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4">
                    <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                            <Image src={img} height={500} className="h-36 w-36 mx-auto" width={500} alt='img' />
                            <p className="text-xl py-2">Atlanta</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-top-8 right-12 " />
                <CarouselNext className="-top-8 right-1 " />
            </Carousel>
        </div>
  )
}

export default DestinationCaurosel