import { useDispatch } from "react-redux";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useEffect, useState } from "react";
import DefaultPlayMusic from "../../src/assets/image/defaultPlay.jpg";

export default function SongCard({ song, i, data, isPlaying, activeSong, isFetching }) {
  const dispatch = useDispatch();

  const [imageLoadingStates, setImageLoadingStates] = useState(
    data?.tracks ? Object.fromEntries(data.tracks.map((artist, i) => [i, true])) : {}
  );

  useEffect(() => {
    setImageLoadingStates((prev) => ({ ...prev, [i]: true }));
  }, []);

  // play and pause button
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // console.log("errorGenre ", errorGenre);
  // isFetching = true;

  const handleImageLoad = (i) => {
    setImageLoadingStates((prev) => ({ ...prev, [i]: false }));
    // setIsVisible((prev) => ({ ...prev, [index]: true }));
  };

  // console.log("isFetching ", isFetching);
  // console.log("loading", imageLoadingStates);
  // console.log("i", i);
  // console.log("data?.tracks", data?.tracks);

  return (
    <div className="flex h-full w-[200px] cursor-pointer flex-col rounded-lg bg-light_bg_Main bg-opacity-80 p-3 py-3 shadow-2xl backdrop-blur-sm  dark:bg-dark_bg_Second ">
      <div className="group relative  w-full">
        {/* button on image */}
        <div
          className={`absolute inset-0  items-center justify-center bg-gray-800 bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title ? "flex bg-gray-800 bg-opacity-70" : "hidden"
          }`}
        >
          {isPlaying && activeSong?.title === song?.title ? (
            <FaPauseCircle
              className=" text-3xl text-gray-300 dark:text-blue-400"
              onClick={handlePauseClick}
            />
          ) : (
            <FaPlayCircle
              className=" animate-ping text-3xl text-gray-300 dark:text-blue-400"
              onClick={handlePlayClick}
            />
          )}
        </div>

        <img
          src={!imageLoadingStates[i] ? song?.images?.coverart : DefaultPlayMusic}
          className="h-44 w-44 rounded"
          alt="song_Img"
          onLoad={() => handleImageLoad(i)}
        />
      </div>
      <div className="mt-4 flex flex-col text-left">
        {isFetching ? (
          <div className="h-4 w-40 animate-pulse rounded-sm bg-slate-600"></div>
        ) : (
          <p className="truncate font-Ubuntu text-lg font-semibold capitalize text-zinc-700 dark:text-white ">
            {song?.title}
          </p>
        )}
        {isFetching ? (
          <div className="mt-2  h-4 w-40 animate-pulse rounded-sm bg-slate-600"></div>
        ) : (
          <p className="mt-1 truncate font-Montserrat  text-sm capitalize text-zinc-700 dark:text-gray-300">
            {song?.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
