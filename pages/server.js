import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import ServerStatus from "../components/ServerStatus";
import PlayerList from "../components/PlayerList";
import { ip, modpack } from "../lib/minecraft_server_info";

const useStyles = makeStyles((theme) => ({
  info: {
    margin: theme.spacing(4, 0),
  },
}));

export default function Server({ status, players }) {
  const classes = useStyles();

  const nameToId = (name) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  return (
    <Container maxWidth="sm">
      <Box className={classes.info}>
        <Typography variant="h5">IP: {ip}</Typography>
        <Typography variant="h5">Game: Minecraft</Typography>
        <Typography variant="h5">
          Modpack:{" "}
          <Link href={`/guides/${nameToId(modpack)}`}>
            <MuiLink href="" color="secondary">{modpack}</MuiLink>
          </Link>
        </Typography>
      </Box>
      <ServerStatus status={status} />
      <PlayerList players={players} />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  let rawData = await fetch(`https://api.minetools.eu/ping/${ip}`);
  let parsedData = await rawData.json();

  return {
    props: {
      status: parsedData.error ? "offline" : "online",
      players: parsedData.error ? [] : Object.values(parsedData.players.sample).map((x) => x.name),
    },
  };
}
