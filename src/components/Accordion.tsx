import {
    Accordion as AccordionRoot,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordion = () => {
  return (
    <AccordionRoot type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border  px-2 mt-5 ">
        <AccordionTrigger className="text-sm md:text-[20px]">How do i book car?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border  px-2 mt-5">
        <AccordionTrigger className="text-sm md:text-[20px]">What documents do i need to rent a car?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border  px-2 mt-5" >
        <AccordionTrigger className="text-sm md:text-[20px]">Can i modify cancel a booking car?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

export default Accordion