import React from "react";
import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CommonBoxes = ({ color, title, icon, url }) => {
  return (
    <Link to={url}>
      <Stack
        bg="#eaf8f8"
        spacing="40px"
        justify="center"
        alignItems={"center"}
        w={"300px"}
        h="300px"
        boxShadow="lg"
        color="#46babb"
      >
        <Text fontSize={"30px"}>{title}</Text>
        <Icon as={icon} alt="" />
      </Stack>
    </Link>
  );
};

export default CommonBoxes;
