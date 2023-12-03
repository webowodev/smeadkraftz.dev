import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "@notion-render/client";
import notion from "@/lib/data/notionAdapter";
import { useEffect, useState } from "react";

export default function BlocksRenderer({
  data,
}: {
  data: BlockObjectResponse[];
}) {
  const [html, setHtml] = useState<string>("");
  const renderer = new NotionRenderer({
    client: notion,
  });

  useEffect(() => {
    renderer.render(...data).then((html) => {
      setHtml(html);
    });
  }, [data]);
  return (
    <div
      className="notion-render"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
