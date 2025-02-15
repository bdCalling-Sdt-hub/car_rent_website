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
    "http://178.128.174.197:8001/dashboard/get-all-destination",
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
                  <div className="hover:text-[#528AAE] group overflow-hidden  bg-[#F9F9F9] text-center hover:shadow-lg py-4">
                    <div className="h-20 w-20 md:h-40 overflow-hidden md:w-40 mx-auto rounded-full border border-black ">
                      <Image
                        src={`${imageUrl}${des?.destination_image}`}
                        height={500}
                        className="md:h-40 group-hover:scale-125 duration-500 transition-all  md:w-40 h-20 w-20 rounded-full border border-black mx-auto"
                        width={500}
                        alt="img"
                      />
                    </div>
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
