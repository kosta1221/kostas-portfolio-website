import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

const Paragraph = ({ children, ...props }: any) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
