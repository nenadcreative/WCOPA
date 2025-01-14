import ReactPlayer from "react-player";

const VideoPlayer = () => {
  
  return (
    <div>
      <div className="aspect-video relative pt-[56.25%]">
        <ReactPlayer url='https://www.youtube.com/watch?v=FMSn7wVCwaw' controls />
      </div>
    </div>
  );
};
export default VideoPlayer;
