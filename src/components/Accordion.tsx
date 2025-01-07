import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TFaq {
  _id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

const Accordion = async () => {
  const response = await fetch("http://192.168.12.75:8056/manage/get-faq", {
    next: {
      revalidate: 30,
    },
  });
  const faqs = await response.json();
  return (
    <AccordionRoot type="single" collapsible className="w-full">
      {faqs?.data?.map((faq: TFaq , i : string) => {
        return (
          <AccordionItem
            key={faq?._id}
            value={`item-${i+1}`}
            className="border  px-2 mt-5 "
          >
            <AccordionTrigger className="text-sm md:text-[20px]">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent>{faq?.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionRoot>
  );
};

export default Accordion;
