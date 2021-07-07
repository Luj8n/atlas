import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function PlayerList({ players }) {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" className={classes.title}>
          Player list
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {players.length} online
        </Typography>
      </Grid>
      <Box className={classes.list}>
        <List>
          {players.map((username, index) => (
            <>
              {index !== 0 ? <Divider /> : null}
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={`https://mc-heads.net/avatar/${username}`}
                    alt=""
                  />
                </ListItemAvatar>
                <ListItemText primary={username} />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </>
  );
}
