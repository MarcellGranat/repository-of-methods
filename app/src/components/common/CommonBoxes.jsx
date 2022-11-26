import { Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommonBoxes = ({ desc, title, icon, url }) => {
  let [revealed, setRevealed] = useState(false);

  let onHover = () => setRevealed((prevRevealed) => !prevRevealed);

  return (
    <Link to={url}>
      <motion.div whileHover={{ rotateY: 180 }} onHoverStart={onHover}>
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
      </motion.div>
    </Link>
  );
};

export default CommonBoxes;
