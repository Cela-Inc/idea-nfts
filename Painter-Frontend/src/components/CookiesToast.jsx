import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CookiesToast = ({ toast }) => {
  return (
    <Flex
      flexDir={"column"}
      gap={5}
      zIndex={1000}
      p={3}
      border={"black"}
      borderStyle={"solid"}
      borderWidth={"1px"}
      borderRadius={10}
      bg={"white"}
    >
      <Heading fontSize={"md"}>Accept Cookies</Heading>
      <Text>
        Cookies and IP addresses allow us to deliver and improve our web content
        and to provide you with a personalized experience. Our website uses
        cookies and collects your IP address for these purposes.
      </Text>
      <Flex gap={5}>
        <Button
          onClick={() => {
            localStorage.setItem("acceptCookies", true);
            toast.closeAll();
          }}
          paddingX={5}
          paddingY={0}
          variant={"ideaButton"}
        >
          Accept
        </Button>
        <Button
          onClick={() => {
            localStorage.setItem("acceptCookies", false);
            toast.closeAll();
          }}
          paddingX={5}
          paddingY={0}
          variant={"ideaButton"}
          background={"transparent"}
        >
          Decline
        </Button>
      </Flex>
    </Flex>
  );
};

export default CookiesToast;
