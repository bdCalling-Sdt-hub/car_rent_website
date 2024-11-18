import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import img from '../assets/car1.png'
import img2 from '../assets/car2.png'
import img3 from '../assets/car3.jpg'
import img4 from '../assets/car4.png'
import Image from "next/image"
import Link from "next/link"
const BrandCaurosel = () => {
    return (
        <div className="mt-10">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <Link href={'/browse-by-brand'}>
                            <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                                <Image src={img} height={500} width={500} alt='img' />
                                <p className="text-xl py-2">Mercedes</p>
                            </div>
                        </Link>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img2} height={500} width={500} alt='img' />
                            <p className="text-xl py-2">BMW</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center  hover:shadow-lg">
                            <Image src={img3} height={500} width={500} alt='img' />
                            <p className="text-xl py-2">VW</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img4} height={500} width={500} alt='img' />
                            <p className="text-xl py-2">Audi</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img} height={500} width={500} alt='img' />
                            <p className="text-xl py-2">Mercedes</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-top-8 right-12 " />
                <CarouselNext className="-top-8 right-1 " />
            </Carousel>
        </div>
    )
}

export default BrandCaurosel