import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

const Profile = ({ image, name }) => {
  return (
    <Flex gap="12px" alignItems="center">
      {image && (
        <Image
          src={image}
          borderRadius="50%"
          w="50px"
          h="50px"
          alt="Szerző képe"
          objectFit={"cover"}
        />
      )}
      <Text color="#093842" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
};

export default Profile;
