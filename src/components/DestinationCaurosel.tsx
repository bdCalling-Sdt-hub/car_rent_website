import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/redux/baseApi";

interface Destination {
  _id: string;
  name: string;
  destination_image: string;
  createdAt: string;
  updatedAt: string;
}

const DestinationCaurosel = async () => {

  const res = await fetch(
    "http://10.0.60.26:8056/dashboard/get-all-destination",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const destination = await res.json();
  return (
    <div className="mt-10">
      <Carousel>
        <CarouselContent>
          {destination?.data?.destinations?.map((des: Destination) => {
            
            return (
              <CarouselItem key={des?._id} className="md:basis-1/4 basis-1/2">
                <Link href={`/browse-by-destination?destination=${des?.name}`}>
                  <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                    <Image
                      src={`${imageUrl}${des?.destination_image}`}
                      height={500}
                      className="md:h-36  md:w-36 h-20 w-20 rounded-full border border-black mx-auto"
                      width={500}
                      alt="img"
                    />
                    <p className="text-xl py-2">{des?.name}</p>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-top-8 right-12 " />
        <CarouselNext className="-top-8 right-1" />
      </Carousel>
    </div>
  );
};

export default DestinationCaurosel;
