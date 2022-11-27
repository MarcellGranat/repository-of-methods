import { Flex } from "@chakra-ui/react";
import React from "react";
import CommonBoxes from "../../components/common/CommonBoxes";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout/Layout";
const Home = () => {
  return (
    <Layout>
      <Flex gap="40px" justify="center" wrap="wrap">
        <CommonBoxes
          title="Keresztmetszet"
          desc="Több megfigyelés egyidejűleg"
          icon={PhoneIcon}
        />
        <CommonBoxes title="Idősor" icon={AddIcon} />
        <CommonBoxes title="Panel" url="/panel" icon={WarningIcon} />
      </Flex>
    </Layout>
  );
};

export default Home;
