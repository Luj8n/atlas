import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  themeButton: {
    marginLeft: theme.spacing(2),
  },
  leftEnd: {
    marginRight: "auto",
  },
  title: {
    marginRight: theme.spacing(4),
  },
}));

export default function Navbar({ setTheme, theme }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Button color="inherit" className={classes.title}>
              <Typography variant="h4">Atlas</Typography>
            </Button>
          </Link>
          <Link href="/server">
            <Button color="inherit" className={classes.leftEnd}>
              <Typography variant="h5">Server</Typography>
            </Button>
          </Link>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
