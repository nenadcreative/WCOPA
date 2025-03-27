import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import star from "@assets/icons/star.svg";
import clsx from 'clsx';

const FormPop = ({ buttonText = "Book Now", variation = "primary-dark", children }) => {


    return (
        <Dialog >
            <DialogTrigger asChild>

                <div
                    className={clsx(
                        "relative cursor-pointer overflow-hidden  group button font-body font-semibold capitalize inline-flex",
                        variation === "primary-dark" &&
                        "bg-dark-1 text-white hover:text-dark-1",
                        variation === "primary-light-indigo" &&
                        "bg-white text-dark-1 hover:text-white",
                        variation === "primary-light-yellow" && "bg-white text-dark-1 ",
                        variation === "secondary-dark" && " text-dark-1 hover:text-indigo",
                        variation === "secondary-light" && "text-white hover:text-yellow",
                        variation === "nav" && "text-white bg-dark-1 hover:text-yellow",
                    )}
                >
                    <span
                        className={clsx(
                            "button-decor ",
                            variation === "primary-dark" && "bg-yellow",
                            variation === "primary-light-indigo" && "bg-indigo",
                            variation === "primary-light-yellow" && "bg-yellow",
                            variation === "nav" && "bg-indigo",
                        )}
                    />
                    <div className="button-content">
                        <div
                            className={clsx(
                                " py-2.5",
                                variation === "primary-dark" && "bg-yellow px-3",
                                variation === "primary-light-indigo" && "bg-indigo px-3",
                                variation === "primary-light-yellow" && "bg-yellow px-3",
                                variation === "secondary-dark" && "px-0",
                                variation === "secondary-light" && "px-0",
                                variation === "nav" && "px-3 bg-indigo",
                            )}
                        >
                            <div
                                className={clsx(
                                    " h-6 w-6 relative flex justify-center items-center group-hover:rotate-360 transition-transform duration-300 rounded-full",
                                    variation === "primary-dark" && "bg-dark-1",
                                    variation === "primary-light-indigo" && "bg-white",
                                    variation === "primary-light-yellow" && "bg-dark-1",
                                    variation === "secondary-dark" && "bg-indigo",
                                    variation === "secondary-light" && "bg-white",
                                    variation === "nav" && "bg-dark-1",
                                )}
                            >
                                <svg className="w-4 block h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2509_101763)">
                                        <path d="M8 0L9.98442 5.97291L16 6.11143L11.2108 9.94145L12.9442 16L8 12.3941L3.05579 16L4.7892 9.94145L0 6.11143L6.01559 5.97291L8 0Z" fill="#F4CA51" />
                                        <path d="M16 6.11143L8 8.84466L9.98442 5.97291L16 6.11143ZM8 12.3941V8.84466L3.05579 16L8 12.3941ZM8 8.84466L12.9442 16L11.2108 9.94145L8 8.84466ZM6.01559 5.97291L8 8.84466V0L6.01559 5.97291ZM4.7892 9.94145L8 8.84466L0 6.11143L4.7892 9.94145Z" fill="#A57D24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2509_101763">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="button__text">{buttonText ? buttonText : "Button"}</span>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] overflow-y-auto max-h-[90vh] px-0 sm:p-8 sm:max-w-[1024px] min-h-[50vh]">
                {children}

            </DialogContent>
        </Dialog>
    );
};

export default FormPop;