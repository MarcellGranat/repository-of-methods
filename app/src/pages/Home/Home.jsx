import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import CommonBoxes from "../../components/common/CommonBoxes";

const Home = () => {
  return (
    <Flex
      wrap="wrap"
      gap="20px"
      minH="100vh"
      alignItems={"center"}
      justify="center"
    >
      <CommonBoxes title="Keresztmetszet" color="green" icon="" />
      <CommonBoxes title="Idősor" color="yellow" icon="" />
      <CommonBoxes title="Panel" color="red" icon="" url="/panel" />
    </Flex>
  );
};

export default Home;