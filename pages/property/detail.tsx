import { useRouter } from "next/router";
import { Container, Stack } from "@mui/material";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const PropertyDetail = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Property Detail Mobile</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);
