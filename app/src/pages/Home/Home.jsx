import { Flex } from "@chakra-ui/react";
import React from "react";
import CommonBoxes from "../../components/common/CommonBoxes";

const Home = () => {
  return (
    <Flex gap="40px" justify="center" wrap="wrap">
      <CommonBoxes
        title="Keresztmetszet"
        color="green"
        icon=""
        desc="Több megfigyelés egyidejűleg"
      />
      <CommonBoxes title="Idősor" color="yellow" icon="" />
      <CommonBoxes title="Panel" color="red" icon="" url="/panel" />
    </Flex>
  );
};

export default Home;
