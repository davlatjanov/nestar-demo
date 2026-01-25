import { useState } from "react";

const Community = () => {
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

export default Community;
