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
            {regions.map((region, regionIndex) => {
                return (
                    <AccordionItem
                        value={regionIndex + 1}
                        key={`region-${region._key || region._id}-${regionIndex}`}

                        className={cn(
                            " mb-14 px-4 rounded-sm ",

                        )}
                    >
                        <AccordionTrigger className="flex-row-reverse justify-between items-center rounded-sm px-8 py-6 bg-lavander text-sm cursor-pointer font-semibold text-left  text-indigo [&>svg]:w-10 [&>svg]:h-10">
                            {/* <PortableText value={faq.question}></PortableText> */}

                            <div className="flex flex-col sm:flex-row gap-8 items-center">
                                <span className="font-display text-display-lg font-semibold leading-none block">{region.title}</span>
                                <div className="flex flex-wrap gap-2 max-w-3xl">
                                    {region.countries && region.countries.map((country, countryIndex) => {
                                        return <img key={`region-country-${country._id || country._key}-${regionIndex}-${countryIndex}`} src={urlForImage(country?.flag).url()} alt={country?.name} />
                                    })}
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-white pt-8">
                            {/* <PortableText value={faq.answer}></PortableText> */}
                            {region.directors &&

                                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {region.directors.map((director, directorIndex) => {
                                        const { image, name, jobTitle, country, bio, _id, representing, email } = director;

                                        const imageUrl = image ? urlForImage(image).height(64).width(64).url() : null;
                                        return <article key={`director-${_id || director._key}-${regionIndex}-${directorIndex}`} className=" bg-white text-dark-2 rounded-sm overflow-hidden flex flex-col">
                                            <div className="px-4 py-6">
                                                <div className="flex items-center gap-4 mb-5">
                                                    {
                                                        imageUrl ? (
                                                            <img
                                                                src={imageUrl}
                                                                alt={name ? name : ""}
                                                                width={64}
                                                                height={64}
                                                                className="w-16 h-16 rounded-full"
                                                            />
                                                        ) : (
                                                            <img alt="" src='/logo-small.png' className="w-16 h-16 rounded-full" />
                                                        )
                                                    }
                                                    <div>
                                                        <h3 className="font-semibold text-display-sm text-indigo">{name}</h3>
                                                        <span className="text-sm text-dark-2">{jobTitle}</span>
                                                    </div>
                                                </div>
                                                <div className="bg-lavander p-4 pb-5 flex flex-col gap-5 grow">
                                                    <div className="flex gap-2">
                                                        <svg width="24" height="25" className="shrink-0" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12" cy="12.5" r="12" fill="#4E30C5" />
                                                            <g clipPath="url(#clip0_2393_16531)">
                                                                <path d="M12 7.14062C10.4169 7.14062 9.12891 8.4286 9.12891 10.0117C9.12891 10.9945 9.62454 11.8988 10.4547 12.4307C11.3025 12.9739 12.3431 13.0316 13.3101 12.5867C13.5159 12.492 13.606 12.2484 13.5113 12.0426C13.4166 11.8369 13.1731 11.7468 12.9673 11.8415C12.2601 12.1668 11.5056 12.1298 10.8973 11.74C10.3036 11.3597 9.94922 10.7136 9.94922 10.0117C9.94922 8.88092 10.8692 7.96094 12 7.96094C13.1308 7.96094 14.0508 8.88092 14.0508 10.0117C14.0508 10.2379 13.8668 10.4219 13.6406 10.4219C13.434 10.4219 13.2409 10.2651 13.2305 10.018C13.2305 10.0159 13.2305 10.0138 13.2305 10.0117C13.2305 9.33324 12.6785 8.78125 12 8.78125C11.3215 8.78125 10.7695 9.33324 10.7695 10.0117C10.7695 10.6902 11.3215 11.2422 12 11.2422C12.3149 11.2422 12.6024 11.1232 12.8203 10.9279C13.0381 11.1232 13.3257 11.2422 13.6406 11.2422C14.3191 11.2422 14.8711 10.6902 14.8711 10.0117C14.8711 8.4286 13.5831 7.14062 12 7.14062ZM12.4044 10.0775C12.3727 10.2724 12.2037 10.4219 12 10.4219C11.7738 10.4219 11.5898 10.2379 11.5898 10.0117C11.5898 9.78556 11.7738 9.60156 12 9.60156C12.2103 9.60156 12.3839 9.7607 12.4073 9.96482C12.4012 10.0021 12.4001 10.04 12.4044 10.0775Z" fill="white" />
                                                                <path d="M18.1523 10.8861C18.1522 10.78 18.1095 10.674 18.0322 10.5967L16.5117 9.07621V5.91016C16.5117 5.68364 16.3281 5.5 16.1016 5.5H7.89844C7.67192 5.5 7.48828 5.68364 7.48828 5.91016V9.07621L5.9678 10.5967C5.96638 10.5981 5.96518 10.5997 5.96379 10.6011C5.88692 10.6803 5.84785 10.7846 5.84768 10.8861C5.84768 10.8863 5.84766 10.8866 5.84766 10.8869V18.2695C5.84766 18.9489 6.40044 19.5 7.07812 19.5H16.9219C17.6011 19.5 18.1523 18.9475 18.1523 18.2695V10.8869C18.1523 10.8866 18.1523 10.8863 18.1523 10.8861ZM16.5117 10.2363L17.1621 10.8867L16.5117 11.5371V10.2363ZM8.30859 9.24623C8.30859 9.24615 8.30859 9.24604 8.30859 9.24596V6.32031H15.6914V9.24596C15.6914 9.24604 15.6914 9.24615 15.6914 9.24623V12.3575L13.4707 14.5781H10.5293L8.30859 12.3575V9.24623ZM7.48828 10.2363V11.5371L6.83786 10.8867L7.48828 10.2363ZM6.66797 18.0996V11.8769L9.77933 14.9883L6.66797 18.0996ZM7.24804 18.6797L10.5293 15.3984H13.4707L16.752 18.6797H7.24804ZM17.332 18.0996L14.2207 14.9883L17.332 11.8769V18.0996Z" fill="white" />
                                                                <path d="M12 7.96094C10.643 7.96094 9.53906 9.06491 9.53906 10.4219C9.53906 11.7702 10.6251 12.8828 12 12.8828C13.3919 12.8828 14.4609 11.7553 14.4609 10.4219C14.4609 9.06491 13.357 7.96094 12 7.96094ZM12 12.068C11.0906 12.068 10.3539 11.3288 10.3539 10.4219C10.3539 9.51723 11.0954 8.77578 12 8.77578C12.9046 8.77578 13.6434 9.51723 13.6434 10.4219C13.6434 11.3156 12.9238 12.068 12 12.068Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2393_16531">
                                                                    <rect width="14" height="14" fill="white" transform="translate(5 5.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <div className="text-md">
                                                            <span className="block text-indigo font-bold">Email:</span>
                                                            <a className="break-all" href={`mailto:${director.email.toLowerCase()}`}>{director.email}</a>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <svg width="24" height="25" viewBox="0 0 24 25" className="shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12" cy="12.5" r="12" fill="#4E30C5" />
                                                            <g clipPath="url(#clip0_2409_16514)">
                                                                <path d="M12 5.5C9.28608 5.5 7.07812 7.70795 7.07812 10.4219C7.07812 11.3388 7.33212 12.2337 7.81282 13.01L11.7198 19.3061C11.7947 19.4267 11.9265 19.5 12.0683 19.5C12.0694 19.5 12.0705 19.5 12.0716 19.5C12.2146 19.4989 12.3467 19.4233 12.4202 19.3006L16.2276 12.9435C16.6818 12.1836 16.9219 11.3116 16.9219 10.4219C16.9219 7.70795 14.7139 5.5 12 5.5ZM15.5237 12.5224L12.0621 18.302L8.51004 12.5778C8.10991 11.9316 7.89297 11.1861 7.89297 10.4219C7.89297 8.16027 9.7384 6.31484 12 6.31484C14.2616 6.31484 16.1043 8.16027 16.1043 10.4219C16.1043 11.1635 15.9017 11.8899 15.5237 12.5224Z" fill="white" />
                                                                <path d="M12 7.96094C10.643 7.96094 9.53906 9.06491 9.53906 10.4219C9.53906 11.7702 10.6251 12.8828 12 12.8828C13.3919 12.8828 14.4609 11.7553 14.4609 10.4219C14.4609 9.06491 13.357 7.96094 12 7.96094ZM12 12.068C11.0906 12.068 10.3539 11.3288 10.3539 10.4219C10.3539 9.51723 11.0954 8.77578 12 8.77578C12.9046 8.77578 13.6434 9.51723 13.6434 10.4219C13.6434 11.3156 12.9238 12.068 12 12.068Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2409_16514">
                                                                    <rect width="14" height="14" fill="white" transform="translate(5 5.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <div className="text-md">
                                                            <span className="block text-indigo font-bold">Representing:</span>
                                                            <div>{representing.map((country, repIndex) => {
                                                                return (
                                                                    <span key={`representing-text-${country._id || country._key}-${regionIndex}-${directorIndex}-${repIndex}`}>
                                                                        {country.name}{repIndex < representing.length - 1 ? ', ' : ''}
                                                                    </span>
                                                                );
                                                            })}</div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="flex flex-wrap gap-2 p-5 bg-lavander mt-auto">{representing.map((country, repIndex) => {
                                                return <img className="w-7.5 h-5" key={`representing-flag-${country._id || country._key}-${regionIndex}-${directorIndex}-${repIndex}`} src={urlForImage(country.flag).width(30).height(20).url()} alt={country.name} />
                                            })}</div>
                                        </article>
                                    })}
                                </div>
                            }

                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
export default DirectorsAccordion;
