import { ip, port } from "../../../lib/minecraft_server_info";

export default async (req, res) => {
  let rawData = await fetch(`https://api.mcsrvstat.us/2/${ip}:${port}`);
  let parsedData = await rawData.json();
  res.status(200).json(parsedData);
};
