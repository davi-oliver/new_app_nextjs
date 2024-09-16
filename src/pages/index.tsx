import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { styled } from "@stitches/react";
import Sidebar from "./(components)/SideBar";




export default function Home() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Grid
      minH="100vh"
      w="100%"
      bg="#e1e1e6"
      templateColumns={{ base: '1fr', lg: '270px 1fr' }}
    >
      {
        !isMobile
        && <Sidebar />
      }

    </Grid>

  );
}


