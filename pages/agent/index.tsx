import { NextPage } from "next";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>AGENT LIST MOBILE</Stack>;
  } else {
    return (
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <Stack className={"container"}> AGENT LIST </Stack>
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
