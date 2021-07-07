import Container from "@material-ui/core/Container";
import ServerStatus from "../components/ServerStatus";
import PlayerList from "../components/PlayerList";

import { ip } from "../lib/minecraft_server_info";

export default function Server({ status, players }) {
  return (
    <Container maxWidth="sm">
      <ServerStatus status={status} />
      <PlayerList players={players} />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  let rawData = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
  let parsedData = await rawData.json();

  return {
    props: {
      status: parsedData.online ? "online" : "offline",
      players: parsedData.players?.list ?? [],
    },
  };
}
