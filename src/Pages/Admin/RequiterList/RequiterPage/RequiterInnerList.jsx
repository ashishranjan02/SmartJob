import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

const requiters = [
  {
    id: 1,
    name: "Alexander Christopher",
    position: "Addverb Technologies",
    applied: "5 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=1",
    email: "alex.christopher@gmail.com",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Joshua Matthew",
    position: "Dell",
    applied: "4 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=2",
    email: "joshuamatthew@gmail.com",
    phone: "+91 7852653210",
  },
  {
    id: 3,
    name: "Michael Joshua",
    position: "eClerx",
    applied: "4 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=3",
    email: "michael.joshua@gmail.com",
    phone: "+91 8521479632",
  },
  {
    id: 4,
    name: "Ramakrishna Pisarla",
    position: "NTT Data",
    applied: "5 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=4",
    email: "ramakrishna.pisarla@gmail.com",
    phone: "+91 9948897812",
  },
  {
    id: 1,
    name: "Alexander Christopher",
    position: "Oracle",
    applied: "5 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=1",
    email: "alex.christopher@gmail.com",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Joshua Matthew",
    position: "Tech Mahindra",
    applied: "4 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/40?img=2",
    email: "joshuamatthew@gmail.com",
    phone: "+91 7852653210",
  },
];

const RequiterInnerList = ({ onSelect }) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Requiters List
      </Typography>
      <List>
        {requiters.map((c) => (
          <React.Fragment key={c.id}>
            <ListItem
              button
              onClick={() => onSelect(c)}
              sx={{ cursor: "pointer" }}
            >
              <ListItemAvatar>
                <Avatar src={c.image} />
              </ListItemAvatar>
              <ListItemText
                primary={c.name}
                secondary={`${c.position} — Applied ${c.applied} from ${c.from}`}
              />
            </ListItem>

            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
export default RequiterInnerList;
