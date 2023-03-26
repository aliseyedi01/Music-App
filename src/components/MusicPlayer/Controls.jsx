import { useState } from "react";
import {
  BsArrowRepeat,
  BsFillSkipEndFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillSkipStartFill,
  BsShuffle,
  BsHeart,
  BsFillHeartFill,
  BsListUl,
} from "react-icons/bs";

import VolumeBar from "./VolumeBar";

export default function Controls({
  isPlaying,
  repeat,
  value,
  onChange,
  setVolume,
  activeSong,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) {
  // console.log(activeSong);
  const [showFavorites, setShowFavorites] = useState(true);

  const handleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="my-3 flex w-full flex-col  items-center justify-center gap-5">
      {/* above btn */}

      <div className="flex w-full items-center justify-between gap-2 px-2 text-xl  text-yellow-400 dark:text-white">
        <BsArrowRepeat
          className={`cursor-pointer ${
            repeat ? "text-orange-600" : "text-white"
          }`}
          onClick={() => setRepeat((prev) => !prev)}
        />
        <BsFillSkipStartFill
          className="cursor-pointer "
          onClick={handlePrevSong}
        />
        {/* play and pause */}
        {isPlaying ? (
          <BsFillPauseFill
            className="cursor-pointer "
            onClick={handlePlayPause}
          />
        ) : (
          <BsFillPlayFill
            className="cursor-pointer "
            onClick={handlePlayPause}
          />
        )}
        <BsFillSkipEndFill
          className="cursor-pointer "
          onClick={handleNextSong}
        />
        <BsShuffle
          className={`cursor-pointer ${
            shuffle ? "text-orange-600" : "text-white"
          }`}
          onClick={() => setShuffle((prev) => !prev)}
        />
      </div>

      {/* down btn */}

      <div className="flex w-full items-center justify-around  px-4 py-2   ">
        <div className="flex items-center gap-3">
          {showFavorites ? (
            <BsFillHeartFill
              className="cursor-pointer text-xl text-yellow-400 dark:text-white"
              onClick={handleFavorites}
            />
          ) : (
            <BsHeart
              className="cursor-pointer text-xl text-yellow-400 dark:text-white"
              onClick={handleFavorites}
            />
          )}
        </div>

        <VolumeBar
          value={value}
          min="0"
          max="1"
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
}
