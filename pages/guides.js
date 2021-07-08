import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Date from "../components/date";
import { getSortedGuidesData } from "../lib/guides";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(4, 0),
  },
  title: {
    margin: theme.spacing(1, 1, 1, 1),
    flexFlow: 1,
  },
  date: {
    fontSize: theme.typography.h6.fontSize,
  },
  logo: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1, 3, 1, 1),
  },
}));

export default function Home({ allGuidesData }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box className={classes.box}>
        <List>
          {allGuidesData.map(({ id, date, title, logo }) => (
            <Link href={`/guides/${id}`}>
              <ListItem key={id} button>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={logo} alt="" className={classes.logo} />
                </ListItemAvatar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" className={classes.title}>
                    {title}
                  </Typography>
                  <Date dateString={date} className={classes.date} />
                </Grid>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const allGuidesData = getSortedGuidesData();
  return {
    props: {
      allGuidesData,
    },
  };
}
