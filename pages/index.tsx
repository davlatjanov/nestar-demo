import { Box, Container, Stack } from "@mui/material";
import { green, red } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: green[300] }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: red[300] }}>Footer</Stack>
    </>
  );
}
