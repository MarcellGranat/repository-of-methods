import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import CommonBoxes from "../../components/common/CommonBoxes";

const Panel = () => {
  return (
    <Flex wrap="wrap" gap="20px" justify="center">
      <CommonBoxes title="DID" color="green" icon="" />
      <CommonBoxes title="Fix effect" color="yellow" icon="" />
    </Flex>
  );
};

export default Panel;
