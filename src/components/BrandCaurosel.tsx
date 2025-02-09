import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import mercedes from '../assets/mercidies.png'
import img from '../assets/ford1.png'
import img2 from '../assets/Hyundai1.png'
import img3 from '../assets/Volvo1.png'
import img4 from '../assets/VW.png'
import img5 from '../assets/Lexus.png'
import img6 from '../assets/Vauxhall.png'
import img7 from '../assets/Landrover.png'
import bmw from '../assets/bmw.png'
import audi from '../assets/audi.png'
import Image from "next/image"
const BrandCaurosel = () => {
    return (
        <div className="mt-10">
            <Carousel>
                <CarouselContent>
                    
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                            <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                                <Image src={img} height={500} width={500} alt='img' className="rounded-t-md h-52" />

                                <p className="text-xl py-2">Ford</p>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                            <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                                <Image src={bmw} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover" />

                                <p className="text-xl py-2">BMW</p>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img2} height={500} width={500} alt='img' className="rounded-t-md h-52 " />
                            <p className="text-xl py-2">Hyundai</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center  hover:shadow-lg">
                            <Image src={img3} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover" />
                            <p className="text-xl py-2">Volvo</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img4} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover"  />
                            <p className="text-xl py-2">VW</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img5} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover"  /> 
                            <p className="text-xl py-2">Lexus</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img6} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover"  /> 
                            <p className="text-xl py-2">Vauxhall</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                            <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                                <Image src={mercedes} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover" />

                                <p className="text-xl py-2">Mercedes</p>
                            </div>
                    </CarouselItem>
                   
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                            <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                                <Image src={audi} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover" />

                                <p className="text-xl py-2">Audi</p>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-1/2">
                        <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                            <Image src={img7} height={500} width={500} alt='img' className="rounded-t-md h-52 object-cover"  /> 
                            <p className="text-xl py-2">Land rover</p>
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