import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const VideoDialog = ({ videoUrl }) => {
  console.log(typeof videoUrl);
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <ReactPlayer url={videoUrl} controls />
      </DialogContent>
    </Dialog>
  );
};
export default VideoDialog;
