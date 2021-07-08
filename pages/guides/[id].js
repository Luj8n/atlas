import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Date from "../../components/date";
import { getAllGuideIds, getGuideData } from "../../lib/guides";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 0, 1),
  },
  text: {
    fontSize: theme.typography.h6.fontSize,
    margin: theme.spacing(3, 0),
  },
  date: {
    fontSize: theme.typography.h5.fontSize,
  },
  logo: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1, 3, 1, 1),
  },
}));

export default function Guide({ guideData }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{guideData.title} guide</title>
      </Head>
      <Container maxWidth="md">
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.title}>
          <Avatar variant="rounded" src={guideData.logo} alt="" className={classes.logo} />
          <Box>
            <Typography variant="h4">{guideData.title}</Typography>
            <Date dateString={guideData.date} className={classes.date} />
          </Box>
        </Grid>
        <Box dangerouslySetInnerHTML={{ __html: guideData.contentHtml }} className={classes.text} />
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const guideData = await getGuideData(params.id);
  return {
    props: {
      guideData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllGuideIds();
  return {
    paths,
    fallback: false,
  };
}
