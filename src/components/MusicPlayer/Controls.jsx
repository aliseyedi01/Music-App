import { BsArrowRepeat, BsFillSkipEndFill, BsFillPauseFill, BsFillPlayFill, BsFillSkipStartFill, BsShuffle, BsListUl, BsMusicPlayerFill } from "react-icons/bs";
import VolumeBar from "./VolumeBar";

export default function Controls() {
  return (
    <div className="my-3 flex w-full flex-col  items-center justify-center gap-5">
      <div className="flex w-full  items-center justify-between gap-2 px-2 text-xl  text-yellow-400 dark:text-white">
        <BsArrowRepeat className="cursor-pointer  " />
        <BsFillSkipStartFill className="cursor-pointer " />
        {/* <BsFillPauseFill className="cursor-pointer " /> */}
        <BsFillPlayFill className="cursor-pointer " />
        <BsFillSkipEndFill className="cursor-pointer " />
        <BsShuffle className="cursor-pointer " />
      </div>
      <div className="flex w-full items-center justify-around  px-4 py-2   ">
        <div className="flex items-center gap-3">
          <BsListUl className=" cursor-pointer  text-xl text-yellow-400 dark:text-white" />
          <BsMusicPlayerFill className="cursor-pointer text-xl text-yellow-400 dark:text-white" />
        </div>
        <div className="flex items-center gap-1">
          <VolumeBar />
          <input type="range" className="h-1 w-24" />
        </div>
      </div>
    </div>
  );
}
