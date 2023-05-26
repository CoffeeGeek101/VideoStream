import React, { useState } from "react";
import { Video } from "../../redux/VideoSlice";
import { useAppDispatch } from "../../redux/store";
import { closePlayer } from "../../redux/PlayerSlice";
import ReactPlayer from "react-player";
import { X } from "lucide-react";


interface IPlayer{
  isOpen : boolean;
  video : Video | null;
}


const Player : React.FC<IPlayer> = ({isOpen, video}) => {

  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  console.log(isPlaying)

  const handleClose = () => {
    dispatch(closePlayer());
    console.log('hello')
  }

  const handlePlayer = () => {
    setIsPlaying((prevVal)=>(!prevVal));
  }

  return (
    <>
    {
      isOpen && (
        <div className='w-[100vw] h-[100vh] lg:w-[450px] lg:h-[650px] bg-black/40 absolute backdrop-blur-lg rounded-xl top-0 left-0 lg:top-[120px] lg:left-5 flex flex-row justify-start z-50 '>
            <div className="w-[568px] relative p-[1%] z-40">
            <ReactPlayer
            url={video?.submission.mediaUrl}
            height='100%'
            width='100%'
            playing={isPlaying}
            onClick={handlePlayer}
            loop
            muted
            controls={true}
            className='absolute top-0 lg:left-0 md:left-[30%]'
            />
            </div>
            <button
            onClick={handleClose}
            className="bg-slate-100 absolute right-5 top-5 z-50"><X/></button>
        </div>
      )
    }
    </>
  )
}

export default Player