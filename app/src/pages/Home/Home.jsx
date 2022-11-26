import React from "react";
import { Flex, Button, Image, Link } from "@chakra-ui/react";
import CommonBoxes from "../../components/common/CommonBoxes";

const Home = () => {
  return (
    <Flex gap="20px" justify="center" wrap="wrap">
      <CommonBoxes title="Keresztmetszet" color="green" icon="" />
      <CommonBoxes title="Idősor" color="yellow" icon="" />
      <CommonBoxes title="Panel" color="red" icon="" url="/panel" />
    </Flex>
  );
};

export default Home;
