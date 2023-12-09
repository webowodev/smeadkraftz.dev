import ReactPlayer from "react-player";

export default function VideoBlock({
  url,
}: {
  url: string;
  captions?: string[];
}) {
  return <ReactPlayer width={"100%"} url={url} />;
}
