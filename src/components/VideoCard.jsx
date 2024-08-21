import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  thumbnailDemoUrl,
  videoDemoUrl,
  videoDemoTitle,
  channelDemoUrl,
  channelDemoTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  const { videoId } = video?.id || {};
  const { snippet } = video || {};
  const thumbnailUrl = snippet?.thumbnails?.high?.url || thumbnailDemoUrl;
  const videoTitle =
    snippet?.title?.slice(0, 60) || videoDemoTitle.slice(0, 60);
  const channelUrl = snippet?.channelId
    ? `/channel/${snippet.channelId}`
    : channelDemoUrl;
  const videoUrl = videoId ? `/video/${videoId}` : videoDemoUrl;
  const channelTitle = snippet?.channelTitle || channelDemoTitle;

  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: "none",
        width: { xs: "100%", sm: "358px", md: "320px" },
      }}
    >
      <Link to={videoUrl}>
        <CardMedia
          component="img"
          image={thumbnailUrl}
          alt={snippet?.title}
          sx={{ height: 180, width: { xs: "100%", sm: "358px" } }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {videoTitle}
          </Typography>
        </Link>
        <Link to={channelUrl}>
          <Typography variant="subtitle2" color="gray">
            {channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
