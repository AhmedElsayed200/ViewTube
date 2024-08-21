import React from "react";

import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

import { profilePictureDemo } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const { id, snippet, statistics } = channelDetail || {};
  const channelId = id?.channelId;
  const channelTitle = snippet?.title;
  const channelThumbnail = snippet?.thumbnails?.high?.url || profilePictureDemo;
  const subscriberCount = statistics?.subscriberCount;

  return (
    <Box
      sx={{
        width: { xs: "356px", md: "320px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        borderRadius: "20px",
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={channelThumbnail}
            alt={channelTitle}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelTitle}{" "}
            <CheckCircleIcon
              sx={{ ml: "5px", fontSize: "14px", color: "gray" }}
            />
          </Typography>
          {subscriberCount && (
            <Typography
              sx={{ color: "gray", fontSize: "15px", fontWeight: 500 }}
            >
              {parseInt(subscriberCount).toLocaleString("en-US")} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
