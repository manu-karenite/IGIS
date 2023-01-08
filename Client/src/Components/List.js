import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const statements = [
  {
    title: "Portable Proof of Identity",
    name: "Government of India",
    color: "#FFA500",
    text: "white",
    statement:
      "The Aadhaar system enables mobility to millions of people who migrate from one part of the country to another by providing a portable proof of identity that can be verified through Aadhaar authentication on-line anytime, anywhere.",
  },

  {
    title: "State of the Art",
    name: "World Bank",
    color: "#FFA500",
    text: "white",
    statement:
      "When it comes to ID systems, India's Aadhaar initiative sets a high bar for the rest of the world. Aadhaar is a state-of-the-art online Verification system",
  },
  {
    title: "Unparalleled Verification System",
    name: "Consultative Group to Assist the Poor (CGAP)",
    color: "blue",
    text: "white",
    statement:
      "In scale and ambition, India’s unique identification effort is unparalleled. If all goes as planned, an estimated 600 million people – about half of India’s population",
  },
  {
    title: "Sophisticated ID System",
    name: "Chief Economist",
    color: "green",
    text: "white",
    statement:
      "The (Aadhaar) system in India is the most sophisticated (ID system) that I've seen. It’s the basis for all kinds of connections that involve things like financial transactions. It could be good for the world if this became widely adopted.",
  },
  {
    title: "Digital Identification System",
    name: "World Bank",
    color: "green",
    text: "white",
    statement:
      "A digital identification system such as India’s Aadhaar, by overcoming complex information problems, helps willing governments to promote the inclusion of disadvantaged groups.",
  },
];

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      {statements.map((curr, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" sx={{ paddingTop: "1.5rem" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ bgcolor: curr?.color, color: curr?.text }}
                >
                  {curr?.title[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={curr?.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {curr?.name}
                    </Typography>
                    {`  -  ${curr?.statement}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
}
