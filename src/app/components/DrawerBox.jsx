import React from "react";
import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Heading,
  Divider,
  Link,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { colorPalettes } from "compositions/lib/color-palettes"

const DrawerBox = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="white" />
        <DrawerHeader borderBottomWidth="1px">
          The "Forgotten Army"
        </DrawerHeader>

        <DrawerBody>
          <Heading as="h3" size="md" my={4}>
            Why were they called the "Forgotten Army"?
          </Heading>
          <Box
            mb={8}
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            mx="auto"
            maxW="container.xl"
            p={4}
            bg="blue.50"
          >
            <Text mb={4}>
              The term "Forgotten Army" primarily refers to the British
              Fourteenth Army during World War II, which fought in the Burma
              Campaign. They were called this because their efforts, sacrifices,
              and victories in one of the most brutal theaters of the war were
              largely overshadowed and unappreciated by the public and media
              back home in Britain, and often globally, compared to the
              campaigns in Europe and North Africa.
            </Text>
            <Text mb={4}>
              Soldiers in Burma faced some of the harshest conditions of WWII,
              including dense jungles, monsoons, and diseases like malaria, all
              while fighting a formidable enemy. Despite their crucial role in
              defeating Japanese forces in Southeast Asia, their efforts were
              not as widely publicized back home, leading to the feeling of
              being "forgotten."
            </Text>
          </Box>

          <Divider my={6} />

          <Heading as="h3" size="md" mb={4}>
            References & Further Reading
          </Heading>

          <Heading as="h4" size="sm" mt={4}>
            Here are some excellent resources and links for further research
            into the "Forgotten Army" and the Burma Campaign:
          </Heading>
          <OrderedList>
            <ListItem>
              <Box
                as="blockquote"
                borderLeft="4px"
                borderColor="gray.200"
                pl={4}
                my={2}
              >
                <Link
                  href="https://www.iwm.org.uk/history/listen-to-8-people-describe-the-war-in-burma-in-their-own-words"
                  isExternal
                >
                  Imperial War Museums (IWM): A fantastic primary source for
                  British wartime history. They have extensive collections and
                  articles on the Burma Campaign. <FaExternalLinkAlt />
                </Link>
              </Box>
            </ListItem>

            <ListItem mb={4}>
              <Box
                as="blockquote"
                borderLeft="4px"
                borderColor="gray.200"
                pl={4}
                my={2}
                fontStyle="italic"
              >
                <Link
                  href="https://www.britishlegion.org.uk/get-involved/remembrance/stories/the-forgotten-army#:~:text=The%20Forgotten%20Army%20%2D%2014th%20Army,Get%20support"
                  isExternal
                >
                  National Army Museum: Another excellent UK-based museum with
                  resources on the British Army's role in the campaign.{" "}
                  <FaExternalLinkAlt />
                </Link>
              </Box>
            </ListItem>

            {/* <Text mt={4}>
              There's also <Text as="strong">strong</Text>,{" "}
              <Text as="b">b</Text>, and <Text as="em">em</Text> support as
              well!
            </Text> */}
            <Button colorScheme="red" variant="solid" onClick={onClose}>
              Close
            </Button>
          </OrderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerBox;
