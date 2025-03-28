import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  console.log(data, "hihih");
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 text-white px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-52 w-96 rounded-lg"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="max-w-2xl">
          <span className="line-clamp-2">{data.videoTitle}</span>
        </h3>
        <div className="text-xs text-grap-400">
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <span className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-700">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
            <span>{data.channelInfo.name}</span>
          </span>
        </div>
        <div className="max-w-2xl line-clamp-2 text-sm dark:text-gray-400 text-gray-600">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
}
