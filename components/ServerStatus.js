import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import LoopIcon from "@material-ui/icons/Loop";
import { green, red, blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: theme.typography.h3.fontSize,
  },
  statusText: {
    marginRight: theme.spacing(2),
  },
  box: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(4, 0, 0),
  },
}));

// available status: "online", "offline", "starting"
export default function ServerStatus({ status }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Typography variant="h5" className={classes.statusText}>
          Server status:
        </Typography>
        {status === "online" ? (
          <>
            <Typography variant="h5" className={classes.statusText}>
              Online
            </Typography>
            <CheckIcon style={{ color: green[500] }} className={classes.icon} />
          </>
        ) : status === "starting" ? (
          <>
            <Typography variant="h5" className={classes.statusText}>
              Starting
            </Typography>
            <LoopIcon style={{ color: blue[500] }} className={classes.icon} />
          </>
        ) : (
          <>
            <Typography variant="h5" className={classes.statusText}>
              Offline
            </Typography>
            <CloseIcon style={{ color: red[500] }} className={classes.icon} />
          </>
        )}
      </Grid>
    </Box>
  );
}
