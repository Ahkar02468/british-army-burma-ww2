"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";

// British Army ranks data with Burmese translations
const ranksData = [
  {
    category: "Enlisted Ranks (အမှုထမ်းအဆင့်များ)",
    ranks: [
      {
        rank: "Private",
        burmese: "ပရိုင်ဗိတ်",
        description: "အခြေခံအမှုထမ်း",
      },
      {
        rank: "Lance Corporal",
        burmese: "လန့်စ် ကော့ပိုရယ်",
        description: "ဂိတ်အုပ်စု ဦးဆောင်သူ",
      },
      {
        rank: "Corporal",
        burmese: "ကော့ပိုရယ်",
        description: "ဂိတ်အုပ်စု ဦးဆောင်သူ",
      },
      {
        rank: "Sergeant",
        burmese: "ဆာဂျန့်",
        description: "ဂိတ်အုပ်စုများကို ဦးဆောင်သူ",
      },
      {
        rank: "Staff Sergeant",
        burmese: "စတော့ ဆာဂျန့်",
        description: "စီးပွားရေးနှင့် စီမံခန့်ခွဲမှုတာဝန်ရှိသူ",
      },
      {
        rank: "Sergeant Major",
        burmese: "ဆာဂျန့် မေဂျာ",
        description: "တပ်ဖွဲ့အတွင်းရှိ အမြင့်ဆုံး Enlisted Rank",
      },
    ],
  },
  {
    category: "Non-Commissioned Officers (အမှုထမ်း အကြီးအကဲများ)",
    ranks: [
      {
        rank: "Company Sergeant Major",
        burmese: "ကုမ္ပဏီ ဆာဂျန့် မေဂျာ",
        description: "ကုမ္ပဏီအတွင်းရှိ အမြင့်ဆုံးအမှုထမ်း",
      },
      {
        rank: "Regimental Sergeant Major",
        burmese: "တပ်တော် ဆာဂျန့် မေဂျာ",
        description: "တပ်တော်အတွင်းရှိ အမြင့်ဆုံးအမှုထမ်း",
      },
    ],
  },
  {
    category: "Commissioned Officers (မှန်ကန်သော အကြီးအကဲများ)",
    ranks: [
      {
        rank: "Second Lieutenant",
        burmese: "ဒုတိယ လက်ဖျား",
        description: "အနိမ့်ဆုံးအကြီးအကဲအဆင့်",
      },
      {
        rank: "Lieutenant",
        burmese: "လက်ဖျား",
        description: "ကုမ္ပဏီများကို ဦးဆောင်သူ",
      },
      {
        rank: "Captain",
        burmese: "ကပ်တင်",
        description: "ကုမ္ပဏီများကို ဦးဆောင်သူ",
      },
      {
        rank: "Major",
        burmese: "မေဂျာ",
        description: "တပ်ဖွဲ့များကို ဦးဆောင်သူ",
      },
      {
        rank: "Lieutenant Colonel",
        burmese: "ဒုတိယ ကော်နယ်",
        description: "တပ်ဖွဲ့များကို ဦးဆောင်သူ",
      },
      {
        rank: "Colonel",
        burmese: "ကော်နယ်",
        description: "တပ်တော်များကို ဦးဆောင်သူ",
      },
      {
        rank: "Brigadier",
        burmese: "ဘရီဂေဒီယာ",
        description: "တပ်ဖွဲ့စည်းပုံများကို ဦးဆောင်သူ",
      },
      {
        rank: "Major General",
        burmese: "မေဂျာ ဂျန်နယ်",
        description: "တပ်တော်များကို ဦးဆောင်သူ",
      },
      {
        rank: "Lieutenant General",
        burmese: "ဒုတိယ ဂျန်နယ်",
        description: "တပ်များကို ဦးဆောင်သူ",
      },
      {
        rank: "General",
        burmese: "ဂျန်နယ်",
        description: "တပ်များကို ဦးဆောင်သူ",
      },
      {
        rank: "Field Marshal",
        burmese: "ဖီလ် မာရှယ်",
        description: "အမြင့်ဆုံး တပ်တော်အကြီးအကဲအဆင့်",
      },
    ],
  },
];

export default function RanksPage() {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl" color="blue.800">
          British Army Ranks
        </Heading>
        <NextLink href="/" passHref>
          <Button colorScheme="blue">← Back Home</Button>
        </NextLink>
      </Flex>

      <Card mb={8} boxShadow="md">
        <CardBody>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            မြန်မာဘာသာဖြင့် အဆင့်အများအပြား
          </Heading>
          <Text textAlign="center" color="gray.600" mb={6}>
            British Army Ranks During WWII Burma Campaign - Translated to
            Burmese
          </Text>

          <Box spacing={8}>
            {ranksData.map((category, index) => (
              <Box key={index} mb={8}>
                <Card>
                  <CardHeader bg="blue.100">
                    <Heading as="h3" size="md">
                      {category.category}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Rank</Th>
                          <Th>Burmese</Th>
                          <Th>Description</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {category.ranks.map((rank, rankIndex) => (
                          <Tr
                            key={rankIndex}
                            bg={rankIndex % 2 === 0 ? "white" : "gray.50"}
                          >
                            <Td fontWeight="medium">{rank.rank}</Td>
                            <Td>{rank.burmese}</Td>
                            <Td>{rank.description}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Box>
        </CardBody>
      </Card>

      <Card bg="yellow.50" borderColor="yellow.200" borderWidth={1}>
        <CardBody>
          <Heading as="h3" size="md" color="yellow.800" mb={2}>
            Historical Note
          </Heading>
          <Text>
            During the Burma Campaign, the British Army maintained these
            traditional rank structures. Many units were composed of British
            soldiers, Indian sepoys, Gurkhas, and other Commonwealth forces, all
            operating under this unified ranking system. The Burma Campaign saw
            officers and men of all ranks facing extremely challenging
            conditions in jungle warfare against a determined enemy.
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
