import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, Loader, ChannelCard } from "./index";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, index) => {
        if (
          item.id.kind !== "youtube#video" &&
          item.id.kind !== "youtube#channel"
        ) {
          return null;
        }
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
