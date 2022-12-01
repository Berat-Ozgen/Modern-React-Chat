import { Stack, Box } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { MediaMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  console.log(Chat_History);
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // TimeLine
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={el} />;
                case "doc":
                  // doc msg
                  break;
                case "link":
                  // link msg
                  break;
                case "reply":
                  // reply msg
                  break;

                default:
                  // text msg
                  return <TextMsg el={el} />;
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
