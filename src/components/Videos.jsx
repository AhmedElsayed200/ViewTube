import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos = [], direction = "row" }) => {
  if (videos?.length === 0) return <Loader />;

  return (
    <Stack
      flexWrap="wrap"
      direction={direction}
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={2}
    >
      {videos?.map((item) => {
        const { videoId, channelId } = item.id;

        return (
          <Box key={videoId || channelId}>
            {videoId && <VideoCard video={item} />}
            {channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
