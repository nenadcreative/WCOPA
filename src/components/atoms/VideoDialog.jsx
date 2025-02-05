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
      w-full h-full relative ">{children}</DialogTrigger>
      <DialogContent className="min-w-[800px] flex justify-center">
        <DialogTitle className="hidden">Video</DialogTitle>
        {videoUrl ? <ReactPlayer controls url={videoUrl} /> : <p>No video available</p>}
      </DialogContent>
    </Dialog>
  );
};
export default VideoDialog;
