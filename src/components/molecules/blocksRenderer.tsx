import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "@notion-render/client";
import notion from "@/lib/data/notionAdapter";
import { useEffect, useState } from "react";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default function BlocksRenderer({
  data,
}: {
  data: BlockObjectResponse[];
}) {
  const [html, setHtml] = useState<string>("");
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin({}));

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
