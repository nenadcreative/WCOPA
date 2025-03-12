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
      <DialogContent className="xl:min-w-[1200px] flex justify-center items-center">
        <DialogTitle className="sr-only">Video</DialogTitle>
        <div className="aspect-video w-full h-full flex justify-center items-center">

          {/* @ts-ignore */}
          {videoUrl ? <ReactPlayer width={1000} height={562.5} controls url={videoUrl} /> : <p>No video available</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default VideoDialog;
