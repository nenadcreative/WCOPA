import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ReactPlayer from "react-player/lazy";

const VideoDialog = ({ videoUrl, children }) => {
  return (
    <Dialog className='w-full h-full '>
      <DialogTrigger className="
      w-full h-full relative cursor-pointer ">{children}</DialogTrigger>
      <DialogContent className="min-w-[800px] flex justify-center items-center">
        <DialogTitle className="sr-only">Video</DialogTitle>
        <div className="aspect-video w-full flex justify-center items-center">

          {/* @ts-ignore */}
          {videoUrl ? <ReactPlayer controls url={videoUrl} /> : <p>No video available</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default VideoDialog;
