import * as React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { urlForImage } from "@sanity/lib/urlForImage";



export default function LightboxImage({ images, imageUrl }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button
                type="button"
                className="flex h-full w-full  "
                onClick={() => setOpen(true)}
            >
                <img className="w-full h-full object-cover aspect-video object-top rounded-sm cursor-pointer" src={imageUrl}></img>
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Zoom]}
                slides={[
                    { src: imageUrl, width: 8000, height: 6000 },
                    ...images.map((image) => {
                        return { src: urlForImage(image).url(), width: 8000, height: 6000 };
                    }),
                ]}
            />
        </>
    );
}