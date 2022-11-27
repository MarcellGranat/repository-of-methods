import { AddIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import CommonBoxes from "../../components/common/CommonBoxes";
import Layout from "../../components/layout/Layout";
const Home = () => {
  return (
    <Layout>
      <Flex gap="40px" justify="center" wrap="wrap">
        <CommonBoxes
          title="Keresztmetszet"
          desc="Több megfigyelés egyidejűleg"
          icon={AddIcon}
        />
        <CommonBoxes title="Idősor" icon={AddIcon} />
        <CommonBoxes title="Panel" url="/panel" icon={AddIcon} />
      </Flex>
    </Layout>
  );
};

export default Home;
