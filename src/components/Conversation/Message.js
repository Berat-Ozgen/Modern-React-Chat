import { Stack, Box } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // TimeLine
              break;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  break;
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
                  break;
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
