import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { RecommendedVideos } from "../../Types";
import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtubeApp/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const { youtubeApp } = getState() as RootState;

    if (!youtubeApp.currentPlaying) {
      throw new Error("No current video is playing");
    }

    const {
      channelInfo: { id: channelId },
    } = youtubeApp.currentPlaying;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    ) || [];

    return { parsedData };
  }
);
