import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card({ data }: { data: HomePageVideos }) {
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isOpen);

  return (
    <div
      className={`${
        isSidebarOpen ? "w-full max-w-xs" : "w-full max-w-sm"
      } h-64 flex gap-3 flex-col transition-all duration-300`}
    >
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm rounded-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-full rounded-md"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <img
            src={data.channelInfo.image}
            alt="channel"
            className="h-9 w-9 rounded-full"
          />
        </div>
        <div>
          <h3>
            <span className="line-clamp-2">{data.videoTitle}</span>
          </h3>
          <div className="text-sm dark:text-gray-400 text-gray-500">
            <div>
              <span className="dark:hover:text-white hover:text-gray-900">
                {data.channelInfo.name}
              </span>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
