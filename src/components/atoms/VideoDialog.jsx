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
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden">Video</DialogTitle>
        {/* <ReactPlayer url={videoUrl} /> */}
        This will be a video player
      </DialogContent>
    </Dialog>
  );
};
export default VideoDialog;
