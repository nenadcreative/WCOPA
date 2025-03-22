import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const CalendlyDialog = ({ buttonText = "Book Now", children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const embedRef = useRef(null);
    const scriptLoadedRef = useRef(false);

    // Handle TidyCal initialization
    useEffect(() => {
        // Only run this effect when the dialog is open
        if (!isOpen) return;

        const initializeTidyCal = () => {
            // Make sure we have a reference to the embed element
            if (!embedRef.current) return;

            // Check if TidyCal's global object exists
            if (window.TidyCal) {
                // If it exists, manually initialize the embed with the element
                window.TidyCal.init(embedRef.current);
            } else {
                // If not, load the script
                const script = document.createElement('script');
                script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
                script.async = true;
                script.onload = () => {
                    scriptLoadedRef.current = true;
                    // Ensure TidyCal initializes after script loads
                    if (window.TidyCal && embedRef.current) {
                        window.TidyCal.init(embedRef.current);
                    }
                };
                document.body.appendChild(script);
            }
        };

        // Small delay to ensure the DOM is ready
        const timer = setTimeout(() => {
            initializeTidyCal();
        }, 300); // Increased delay to ensure the DOM is fully rendered

        return () => {
            clearTimeout(timer);
        };
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <span className="cursor-pointer font-bold text-primary hover:underline">
                    {children || buttonText}
                </span>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] overflow-y-auto max-h-[70vh] px-0 sm:max-w-[90vw] min-h-[50vh]">
                <div
                    ref={embedRef}
                    className="tidycal-embed "
                    data-path="gwenwilson/30-minute-meeting"
                ></div>

            </DialogContent>
        </Dialog>
    );
};

export default CalendlyDialog;