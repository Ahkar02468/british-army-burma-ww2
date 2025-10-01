"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  CardHeader,
  LinkBox,
  LinkOverlay,
  Flex,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Card mb={8} boxShadow="md">
        <CardBody>
          <Heading as="h1" size="xl" color="blue.800" mb={4}>
            British Army in Burma Campaign (WWII)
          </Heading>

          <Box mb={6}>
            <Heading as="h2" size="md" mb={3}>
              About the Burma Campaign
            </Heading>
            <Text mb={3}>
              The Burma Campaign (1942-1945) was fought in the British colony of
              Burma primarily between the British Commonwealth and Japanese
              forces. It was one of the longest campaigns of World War II,
              lasting from the beginning of 1942 to the end of 1945.
            </Text>
            <Text mb={3}>
              This educational resource provides information about the British
              Army's organizational structure, ranks, and military terminology
              used during this campaign, translated into the Burmese language.
            </Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            <LinkBox
              as={Card}
              variant="outline"
              borderColor="blue.200"
              _hover={{ bg: "blue.50" }}
            >
              <CardHeader>
                <Heading as="h3" size="md" color="blue.800">
                  <LinkOverlay as={NextLink} href="/ranks">
                    မြန်မာဘာသာဖြင့် အဆင့်အများအပြား
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text mb={3}>British Army Ranks in Burmese</Text>
                <Button as="div" colorScheme="blue" variant="link">
                  View Ranks →
                </Button>
              </CardBody>
            </LinkBox>

            <LinkBox
              as={Card}
              variant="outline"
              borderColor="green.200"
              _hover={{ bg: "green.50" }}
            >
              <CardHeader>
                <Heading as="h3" size="md" color="green.800">
                  <LinkOverlay as={NextLink} href="/terminology">
                    စကားလုံးအသုံးအနှုန်းများ
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text mb={3}>Military Terminology in Burmese</Text>
                <Button as="div" colorScheme="green" variant="link">
                  View Terms →
                </Button>
              </CardBody>
            </LinkBox>
          </Grid>
        </CardBody>
      </Card>

      <Card boxShadow="md">
        <CardBody>
          <Heading as="h2" size="md" mb={3}>
            Historical Context
          </Heading>
          <Text mb={3}>
            The Burma Campaign involved some of the most difficult fighting of
            the war, with harsh terrain, extreme weather conditions, and
            determined opposition. The campaign included major battles such as
            the Battle of Imphal and the Battle of Kohima, which were turning
            points in the war against Japan.
          </Text>
          <Text>
            Understanding the structure and hierarchy of the British forces
            helps us appreciate the complexity of military operations in this
            challenging theater of war.
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
