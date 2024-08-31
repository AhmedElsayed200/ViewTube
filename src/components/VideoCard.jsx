import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
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
  const channelTitle = snippet?.channelTitle.slice(0, 10) || channelDemoTitle;

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: { xs: "300px", sm: "358px", md: "320px" },
      }}
    >
      <Link to={videoUrl}>
        <CardMedia
          component="img"
          image={thumbnailUrl}
          alt={snippet?.title}
          sx={{
            borderRadius: "10px",
            height: 180,
            width: { xs: "300px", sm: "358px", md: "320px" },
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: isDarkMode ? "#1E1E1E" : "#FFF",
          height: "106px",
        }}
      >
        <Link to={videoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color={isDarkMode ? "#FFF" : "#000"}
          >
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
