import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Flex
      minH="100vh"
      alignItems={"center"}
      justify="center"
      position={"relative"}
      py="100px"
    >
      {children}
      <Link href="https://mnbintezet.hu/" isExternal>
        <Image
          src="/mnb.png"
          alt="MNB Intézet"
          position="absolute"
          right="20px"
          bottom="20px"
          maxH={"50px"}
        />
      </Link>
      <Link href="https://www.marcellgranat.com/" isExternal>
        <Image
          src="/marcell-granat.png"
          alt="Marcell Granát"
          position="absolute"
          maxH={"70px"}
          top="20px"
          left="20px"
        />
      </Link>
    </Flex>
  );
};

export default Layout;
