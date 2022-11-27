import { Flex, Stack, Text, Link, SimpleGrid, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/layout/Layout";
import { CustomBreadcrumb } from "../../components/common/CustomBreadCrumb";
import Profile from "../../components/common/Profile";
const FixEffect = () => {
  return (
    <Layout title="Fix Effect">
      <CustomBreadcrumb
        title="Fix Effect"
        grandparentTitle={"Panel"}
        grandparentHref="/panel"
      />
      <SimpleGrid columns={[1, 2, 3]} gap={20} maxW="1200px" px="20px">
        <Stack spacing="20px">
          <Heading color="#093842" fontSize="2xl">
            Saját írásaink
          </Heading>
          <Profile name="Granát Marcell" image="/marcell.jpeg" />
          <Text color="#093842" fontSize="md">
            A termékenységi ráta kapcsolata az egy főre eső bruttó kibocsátással
            és a munkanélküliséggel. Elérthető itt: &nbsp;
            <Link
              href="https://marcellgranat.github.io/ujdemografiaiprogram/index.html"
              isExternal
            >
              https://marcellgranat.github.io/ujdemografiaiprogram/index.html
            </Link>
          </Text>
        </Stack>
        <Stack spacing="20px">
          <Heading color="#093842" fontSize="2xl">
            Ajánlott szakirodalom
          </Heading>
          <Profile name="Granát Marcell" />
        </Stack>
        <Stack spacing="20px">
          <Heading color="#093842" fontSize="2xl">
            Hallgatóink készítették
          </Heading>
          <Profile name="Granát Marcell" />
        </Stack>
      </SimpleGrid>
    </Layout>
  );
};

export default FixEffect;
