import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import CommonBoxes from "../../components/common/CommonBoxes";
import { CustomBreadcrumb } from "../../components/common/CustomBreadCrumb";
import Layout from "../../components/layout/Layout";
const Panel = () => {
  return (
    <Layout title="Panel">
      <Stack>
        <CustomBreadcrumb title="Panel" />
        <Flex wrap="wrap" gap="40px" justify="center">
          <CommonBoxes title="DID" icon={AddIcon} />
          <CommonBoxes title="Fix effect" icon={AddIcon} url="/fix-effect" />
        </Flex>
      </Stack>
    </Layout>
  );
};

export default Panel;
