import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const channelResponse = await fetchFromAPI(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(channelResponse?.items[0]);

        const videosResponse = await fetchFromAPI(
          `search?channelId=${id}&part=snippet,id&order=date`
        );
        setVideos(videosResponse?.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };

    fetchChannelData();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          sx={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" justifyContent="center">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
