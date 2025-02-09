"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

// Image Imports
import mercedes from '../assets/mercidies.png';
import img from '../assets/ford1.png';
import img2 from '../assets/Hyundai1.png';
import img3 from '../assets/Volvo1.png';
import img4 from '../assets/VW.png';
import img5 from '../assets/Lexus.png';
import img6 from '../assets/Vauxhall.png';
import img7 from '../assets/Landrover.png';
import bmw from '../assets/bmw.png';
import audi from '../assets/audi.png';

const carBrands = [
    { src: img, name: "Ford" },
    { src: bmw, name: "BMW" },
    { src: img2, name: "Hyundai" },
    { src: img3, name: "Volvo" },
    { src: img4, name: "VW" },
    { src: img5, name: "Lexus" },
    { src: img6, name: "Vauxhall" },
    { src: mercedes, name: "Mercedes" },
    { src: audi, name: "Audi" },
    { src: img7, name: "Land Rover" },
];

const BrandCaurosel = () => {
    return (
        <div className="mt-10">
            <Carousel>
                <CarouselContent>
                    {carBrands.map((brand, index) => (
                        <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
                            <motion.div
                               
                                className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-xl rounded-md overflow-hidden"
                            >
                                {/* Container with fixed size */}
                                <div className="overflow-hidden relative h-52">
                                    {/* Image zoom effect on hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }} 
                                        transition={{ duration: 0.3 }}
                                        className="relative h-full w-full"
                                    >
                                        <Image
                                            src={brand.src}
                                            height={200}
                                            width={300}
                                            alt={brand.name}
                                            className="object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-t-md"
                                        />
                                    </motion.div>
                                </div>
                                <p className="text-xl py-2">{brand.name}</p>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-top-8 right-12" />
                <CarouselNext className="-top-8 right-1" />
            </Carousel>
        </div>
    );
};






export default BrandCaurosel;
