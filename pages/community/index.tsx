import { useState } from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("HELLO MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
