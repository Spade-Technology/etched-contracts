import { formatVideoTime } from "@/utils/common";
import { ExpandIcon, PauseCircleIcon, PlayCircleIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { MutableRefObject, useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { Slider } from "./ui/slider";

export const VideoPlayer = ({ url }: { url: string }) => {
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef() as MutableRefObject<ReactPlayer>;
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleMouseMove = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setShowControls(true);

    const newTimeoutId = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="flex w-full cursor-pointer flex-col items-center" ref={divRef}>
      <div className="relative w-full" onClick={() => setPlaying(!playing)} onMouseMove={handleMouseMove}>
        <ReactPlayer
          ref={playerRef}
          controls={false}
          playing={playing}
          url={url}
          onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
          onSeek={setPlayedSeconds}
          onEnded={() => setPlaying(false)}
          muted={muted}
          volume={volume}
          width="100%"
          height="100%"
        />

        {!playing && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayIcon />
          </div>
        )}

        {playerRef.current && divRef.current && showControls && (
          <div className="absolute bottom-0 w-full" onClick={(e) => e.stopPropagation()}>
            <Controls
              playerRef={playerRef.current}
              playing={playing}
              setPlaying={setPlaying}
              setMuted={setMuted}
              setVolume={setVolume}
              divRef={divRef.current}
            />
          </div>
        )}
      </div>
    </div>
  );
};

type ControlsProps = {
  playing: boolean;
  playerRef: ReactPlayer;
  setPlaying: (arg: boolean) => void;
  setMuted: (arg: boolean) => void;
  setVolume: (arg: number) => void;
  divRef: HTMLDivElement;
};

const Controls = ({ playerRef, playing, setPlaying, setMuted, setVolume, divRef }: ControlsProps) => {
  const seek = (seconds: number[]) => {
    if (seconds[0]) playerRef.seekTo(seconds[0], "seconds");
  };

  return (
    <div className="w-full px-4">
      <Slider
        trackerClassName="bg-gray-800"
        value={[playerRef.getCurrentTime()]}
        max={Math.floor(playerRef.getDuration())}
        onValueChange={seek}
      />

      <div className="my-2 flex justify-between">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? <PauseCircleIcon className="h-8 w-8 text-white" /> : <PlayCircleIcon className="h-8 w-8 text-white" />}
        </button>
        <div className="flex">
          <button
            className="mr-2"
            onClick={() => {
              setMuted(!playerRef.props.muted);
            }}
          >
            {playerRef.props.muted ? (
              <VolumeXIcon className="h-8 w-8 text-white" />
            ) : (
              <Volume2Icon className="h-8 w-8 text-white" />
            )}
          </button>
          <Slider
            trackerClassName="bg-gray-800"
            className="mr-2 w-28"
            value={[playerRef.props.muted ? 0 : playerRef.props.volume || 1]}
            max={1}
            step={0.1}
            onValueChange={(vol) => {
              if (vol[0]) setVolume(vol[0]);
            }}
          />
          <div className="mr-2 flex items-center justify-center">
            <p className="text-white">{formatVideoTime(Math.round(playerRef.getDuration() - playerRef.getCurrentTime()))}</p>
          </div>

          <button
            onClick={() => {
              if (screenfull.isEnabled) {
                screenfull.toggle(divRef, { navigationUI: "hide" });
              }
            }}
          >
            <ExpandIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PlayIcon = () => (
  <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="46.5" cy="46.5" r="26.5" fill="white" />
    <circle cx="47" cy="47" r="47" fill="white" fillOpacity="0.4" />
    <path
      d="M84.0668 31.951C82.0584 26.9907 79.0972 22.5348 75.2765 18.7142C71.4559 14.8935 67.0093 11.9416 62.0397 9.92387C57.2569 7.99019 52.1938 7 47 7C41.8062 7 36.7431 7.99019 31.951 9.93321C26.9907 11.9416 22.5348 14.9028 18.7142 18.7235C14.8935 22.5441 11.9416 26.9907 9.92387 31.9603C7.99019 36.7431 7 41.8062 7 47C7 52.1938 7.98085 57.2569 9.92387 62.049C11.9323 67.0093 14.8935 71.4652 18.7142 75.2859C22.5348 79.1065 26.9813 82.0584 31.951 84.0761C36.7431 86.0191 41.8062 87 47 87C52.1938 87 57.2569 86.0098 62.049 84.0761C67.0093 82.0677 71.4652 79.1065 75.2859 75.2859C79.1065 71.4652 82.0584 67.0187 84.0761 62.049C86.0191 57.2569 87 52.1938 87 47C87 41.8062 86.0098 36.7431 84.0668 31.951ZM65.2905 49.5222L65.2158 49.5689C65.085 49.653 64.9916 49.709 64.9262 49.7464L40.7973 64.5899L40.4423 64.8048L40.3769 64.8702L40.1621 64.9636C39.639 65.1971 38.9944 65.2812 38.5647 65.2812C36.6684 65.2812 35.0149 63.8239 34.8561 62.0397V32.3246C34.8561 32.007 34.9589 31.7548 35.0523 31.5773C35.4073 29.9519 36.9113 28.7188 38.6394 28.7188C39.1345 28.7188 39.6483 28.8216 40.078 29.0084L40.1621 29.0458L40.2368 29.0925L64.6646 43.3382C65.3652 43.7492 65.3652 43.7492 65.4493 43.8146L65.4587 43.8239C66.1312 44.3751 66.5796 45.1411 66.7291 45.9911C66.7665 46.206 66.7851 46.4115 66.7851 46.6077C66.7851 47.7567 66.2247 48.8496 65.2905 49.5222Z"
      fill="#097B45"
    />
  </svg>
);
