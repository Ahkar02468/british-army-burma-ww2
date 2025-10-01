import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Heading,
} from "@chakra-ui/react";

const DrawerBox = ({isOpen, onClose}) => {
  return (
    
                  <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader borderBottomWidth="1px">
                        The "Forgotten Army"
                      </DrawerHeader>
    
                      <DrawerBody>
                        <Heading as="h3" size="md" my={4}>
                          Why were they called the "Forgotten Army"?
                        </Heading>
                        <Text mb={4}>
                          The term "Forgotten Army" primarily refers to the British Fourteenth Army during World War II, which fought in the Burma Campaign. They were called this because their efforts, sacrifices, and victories in one of the most brutal theaters of the war were largely overshadowed and unappreciated by the public and media back home in Britain, and often globally, compared to the campaigns in Europe and North Africa.
                        </Text>
                        <Text mb={4}>
                          Soldiers in Burma faced some of the harshest conditions of
                          WWII, including dense jungles, monsoons, and diseases like
                          malaria, all while fighting a formidable enemy. Despite their crucial role in defeating Japanese forces in Southeast Asia, their efforts were not as widely publicized back home, leading to the feeling of being "forgotten."
                        </Text>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
  )
}

export default DrawerBox