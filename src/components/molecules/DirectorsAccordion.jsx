import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/urlForImage";

const DirectorsAccordion = ({ regions }) => {
    return (
        <Accordion type="single" defaultValue={1} collapsible className="w-full text-left">
            {regions.map((region, index) => {
                return (
                    <AccordionItem
                        value={index + 1}
                        key={region._key}

                        className={cn(
                            " mb-14 px-4 rounded-sm ",

                        )}
                    >
                        <AccordionTrigger className="flex-row-reverse justify-between items-center rounded-sm px-8 py-6 bg-lavander text-sm cursor-pointer font-semibold text-left  text-indigo">
                            {/* <PortableText value={faq.question}></PortableText> */}

                            <div className="flex gap-8 items-center">
                                <span className="font-display text-display-lg font-semibold leading-none block">{region.title}</span>
                                <div className="flex flex-wrap gap-2 max-w-3xl">
                                    {region.countries && region.countries.map((country) => {
                                        return <img key={country._id} src={urlForImage(country?.flag).url()} alt={country?.name} />
                                    })}
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-white pt-8">
                            {/* <PortableText value={faq.answer}></PortableText> */}
                            {region.directors && region.directors.map((director) => {
                                return <div key={director._id}><article>
                                    <div class="flex items-center">
                                        {
                                            imageUrl ? (
                                                <Image
                                                    src={imageUrl}
                                                    alt={name ? name : ""}
                                                    width={64}
                                                    height={64}
                                                    class="w-16 h-16 rounded-full"
                                                />
                                            ) : (
                                                <div class="w-full h-full bg-indigo/70 absolute top-0 left-0" />
                                            )
                                        }
                                        <div>
                                            <h3>{name}</h3>
                                            <p>{jobTitle}</p>
                                        </div>
                                    </div>
                                </article></div>
                            })}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
export default DirectorsAccordion;
