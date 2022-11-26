import React from "react";
import { Box, Button, Heading, Icon, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CommonBoxes = ({ color, title, icon, url }) => {
  return (
    <Link to={url}>
      <Stack
        spacing="20px"
        bg={color}
        justify="center"
        alignItems={"center"}
        color="white"
        w={"300px"}
        h="300px"
        borderRadius={"10px"}
      >
        <Heading>{title}</Heading>
        <Icon as={icon} alt="" />
      </Stack>
    </Link>
  );
};

export default CommonBoxes;
