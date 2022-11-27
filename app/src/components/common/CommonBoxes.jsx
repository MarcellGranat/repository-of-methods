import { Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommonBoxes = ({ desc, title, icon, url }) => {
  let [revealed, setRevealed] = useState(false);
  return (
    <Link to={url}>
      {/* <motion.div
        whileHover={desc ? { rotateY: 180 } : { rotateY: 0 }}
        onHoverStart={() => setRevealed(title)}
        onHoverEnd={() => setRevealed("")}
      > */}
      <Stack
        bg="#eaf8f8"
        justify="space-between"
        alignItems={"center"}
        w={"300px"}
        h="300px"
        boxShadow="lg"
        color="#46babb"
        py={24}
      >
        {/* {revealed === title && desc ? (
            <Text fontSize={"30px"} transform="scaleX(-1)" textAlign={"center"}>
              {desc}
            </Text>
          ) : (
            <> */}
        <Stack spacing="16px" justify="center" alignItems={"center"}>
          <Icon as={icon} alt="" boxSize="24px" />
          <Text fontSize={"30px"}>{title}</Text>
        </Stack>
        <Text fontSize={"18px"} fontWeight="thin">
          {desc}
        </Text>
        {/* </>
          )} */}
      </Stack>
      {/* </motion.div> */}
    </Link>
  );
};

export default CommonBoxes;
