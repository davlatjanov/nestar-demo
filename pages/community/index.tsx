import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      {" "}
      Community
      <button onClick={() => alert("WASSUP")} style={{ margin: "15px" }}>
        Button
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
