import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import { Video, fetchVideosStart } from "../../../redux/VideoSlice";
import { openPlayer } from "../../../redux/PlayerSlice";

const Videolist = () => {

  const dispatch = useAppDispatch();
  const videoList = useAppSelector(state => state.video);
  const [page, setPage] = useState<number>(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    dispatch(fetchVideosStart(page));
  },[page])
  
  const lastVideo = useCallback((node : HTMLDivElement) => {
    if(!node) return;
    if(videoList.isLoading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries)=> {
      if(entries[0].isIntersecting){
        setPage(page + 1);
        dispatch(fetchVideosStart(page));
      }
    },{
      root : containerRef.current,
    });
    observer.current.observe(node);
  },[videoList.isLoading, dispatch]);


  const handleVideo = ( video : Video ) => {
    dispatch(openPlayer(video));
  }

  return (
    <div className='w-full h-[600px] overflow-y-scroll mt-2 flex flex-col m-auto' ref={containerRef}>
        <div className="h-auto w-full flex flex-row flex-wrap gap-2 justify-center z-10 ">
        {
          videoList.videos.map((video,index)=>(
            <div
            className="w-[200px] h-[250px] xs:w-[300px] xs:h-[500px] relative rounded-md bg-gradient-to-t from-zinc-900 from-10%  to-zinc-400 overflow-hidden flex flex-col justify-between"
            key={video.postId} 
            ref={
              index === videoList.videos.length - 1 ? lastVideo : null
            }
            onClick={() => handleVideo(video)}
            >
                <img src={video.submission.thumbnail} className="w-full rounded-md absolute top-0 h-full object-cover object-center mix-blend-overlay"/>
                <div className="flex flex-row gap-1 p-2 items-center">
                  <img src={video.creator.pic} className="h-[30px] w-[30px] object-cover rounded-full shadow-lg z-10" />
                  <p
                  style={{textShadow:'0px 0px 5px rgba(0, 0, 0, 0.632)'}}
                  className="truncate text-xs w-[180px] font-light">{video.creator.handle}</p>
                </div>
                <div className="flex flex-col items-start overflow-hidden p-3">
                  <p className="text-sm font-bold">{video.submission.title}</p>
                  <p className="truncate text-xs w-[180px] font-light z-10 text-gray-400">{video.submission.description}</p>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Videolist