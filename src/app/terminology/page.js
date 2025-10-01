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
} from "@chakra-ui/react";
import NextLink from "next/link";

// Military terminology data with Burmese translations
const terminologyData = [
  {
    category: "Unit Organization (တပ်ဖွဲ့စည်းပုံ)",
    terms: [
      {
        term: "Section",
        burmese: "ဂိတ်အုပ်စု",
        description: "အနည်းငယ်သော တပ်ဖွဲ့စည်းပုံအုပ်စု (၈-၁၀ ယောက်)",
      },
      {
        term: "Platoon",
        burmese: "ဂိတ်အုပ်စုကြီး",
        description: "တပ်ဖွဲ့စည်းပုံအုပ်စု (၂၀-၅၀ ယောက်)",
      },
      {
        term: "Company",
        burmese: "ကုမ္ပဏီ",
        description: "ဂိတ်အုပ်စု (၈၀-၁၂၀ ယောက်)",
      },
      {
        term: "Battalion",
        burmese: "တပ်ဖွဲ့",
        description: "ကုမ္ပဏီ (၃-၅ ခု) ပေါင်းစည်းထားသည့် တပ်ဖွဲ့စည်းပုံ",
      },
      {
        term: "Regiment",
        burmese: "တပ်တော်",
        description: "တပ်ဖွဲ့ (၂-၃ ခု) ပေါင်းစည်းထားသည့် တပ်ဖွဲ့စည်းပုံ",
      },
      {
        term: "Brigade",
        burmese: "တပ်ဖွဲ့စည်းပုံ",
        description: "တပ်တော် (၂-၄ ခု) ပေါင်းစည်းထားသည့် တပ်ဖွဲ့စည်းပုံ",
      },
      {
        term: "Division",
        burmese: "တပ်မ",
        description: "တပ်ဖွဲ့စည်းပုံ (၃-၄ ခု) ပေါင်းစည်းထားသည့် တပ်ဖွဲ့စည်းပုံ",
      },
    ],
  },
  {
    category: "Combat Terms (စစ်ပွဲစကားလုံးများ)",
    terms: [
      {
        term: "Infantry",
        burmese: "ဥသြဇာတပ်",
        description: "ခြေသွားတပ်များ",
      },
      {
        term: "Artillery",
        burmese: "အာရှယ်တပ်",
        description: "အပ်လိုက်တပ်များ",
      },
      {
        term: "Cavalry",
        burmese: "မြင်းတပ်",
        description:
          "မြင်းစီးတပ်များ (Burma Campaign တွင် အဓိက ဥသြဇာတပ်ဖြစ်ပြောင်း)",
      },
      {
        term: "Reconnaissance",
        burmese: "စုံစမ်းသင်းကြည့်ရှုခြင်း",
        description: "ရန်သူ၏ တည်နေရာနှင့် အင်အားကို စုံစမ်းခြင်း",
      },
      {
        term: "Ambush",
        burmese: "ဖိုက်တင်းထိုးခြင်း",
        description: "မျှော်စောင့်ထိုးခြင်း",
      },
    ],
  },
  {
    category: "Leadership Terms (ဦးဆောင်မှုဆိုင်ရာစကားလုံးများ)",
    terms: [
      {
        term: "Command",
        burmese: "တပ်ချုပ်မှု",
        description: "တပ်ဖွဲ့ကို ဦးဆောင်ခြင်း",
      },
      {
        term: "Order",
        burmese: "ညွှန်ကြားချက်",
        description: "အမိန့်",
      },
      {
        term: "Tactical",
        burmese: "တက်တစ်ဆိုင်ရာ",
        description: "စစ်ပွဲနည်းပညာဆိုင်ရာ",
      },
      {
        term: "Strategy",
        burmese: "စီးပွားရေး",
        description: "တပ်ချုပ်မှုနည်းပညာ",
      },
    ],
  },
];

export default function TerminologyPage() {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl" color="blue.800">
          Military Terminology
        </Heading>
        <NextLink href="/" passHref>
          <Button colorScheme="blue">← Back Home</Button>
        </NextLink>
      </Flex>

      <Card mb={8} boxShadow="md">
        <CardBody>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            စကားလုံးအသုံးအနှုန်းများ
          </Heading>
          <Text textAlign="center" color="gray.600" mb={6}>
            British Army Military Terms During WWII Burma Campaign - Translated
            to Burmese
          </Text>

          <Box spacing={8}>
            {terminologyData.map((category, index) => (
              <Box key={index} mb={8}>
                <Card>
                  <CardHeader bg="green.100">
                    <Heading as="h3" size="md">
                      {category.category}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Term</Th>
                          <Th>Burmese</Th>
                          <Th>Description</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {category.terms.map((term, termIndex) => (
                          <Tr
                            key={termIndex}
                            bg={termIndex % 2 === 0 ? "white" : "gray.50"}
                          >
                            <Td fontWeight="medium">{term.term}</Td>
                            <Td>{term.burmese}</Td>
                            <Td>{term.description}</Td>
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
            Historical Context
          </Heading>
          <Text>
            During the Burma Campaign, these terms were essential for
            communication between British, Indian, Gurkha, and other
            Commonwealth forces. The challenging jungle terrain required
            specific tactical approaches and terminology. Many of these terms
            were adapted for local conditions and translated to facilitate
            communication with local populations and forces.
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
