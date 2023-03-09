import {
  Box,
  Grid,
  GridItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import HumanityNavBar from "../components/HumanityRocks/HumanityNavBar";
import SVG_Icon from "../components/SVG_Icon";

const HumanityRocksFinance = () => {
  return (
    <>
      <HumanityNavBar />
      <Grid
        background={`url(${
          import.meta.env.VITE_ASSETS_PATH
        }/humanityRocks/images/Background.png)`}
        backgroundColor={"black"}
        paddingTop={48}
        paddingX={32}
        height={"100%"}
        width={"100%"}
      >
        <GridItem display={"flex"} justifyContent={"center"}>
          <TableContainer color={"white"}>
            <Table
              __css={{ borderCollapse: "separate", borderSpacing: "3em 0" }}
              variant='unstyled'
            >
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th
                    background={"yellow.400"}
                    color={"black"}
                    height={"7rem"}
                    width={"12rem"}
                    padding={8}
                  >
                    <Text
                      marginBottom={5}
                      fontSize={"14px"}
                      textTransform='none'
                    >
                      Platinum
                    </Text>
                    <Text fontSize={"20px"}>$1,000(750)</Text>
                  </Th>
                  <Th
                    background={"rgba(255, 255, 255, 0.16)"}
                    color={"white"}
                    height={"7rem"}
                    width={"12rem"}
                    padding={8}
                  >
                    <Text
                      fontSize={"16px"}
                      marginBottom={4}
                      textTransform='none'
                    >
                      Rare
                    </Text>
                    <Text fontSize={"16px"}>$500(750)</Text>
                  </Th>
                  <Th
                    background={"rgba(255, 255, 255, 0.08)"}
                    color={"white"}
                    height={"7rem"}
                    width={"12rem"}
                    padding={8}
                  >
                    <Text
                      fontSize={"16px"}
                      marginBottom={4}
                      textTransform='none'
                    >
                      Ultimate
                    </Text>
                    <Text fontSize={"16px"}>$250(750)</Text>
                  </Th>
                  <Th
                    background={"#000"}
                    color={"white"}
                    height={"7rem"}
                    width={"12rem"}
                    padding={8}
                  >
                    <Text
                      fontSize={"16px"}
                      marginBottom={4}
                      textTransform='none'
                    >
                      Silver
                    </Text>
                    <Text fontSize={"16px"}>$100(750)</Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Governance + Whitelisting</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
                <Tr>
                  <Td>Get Merch</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
                <Tr>
                  <Td>
                    Beta Tester textAlign={"center"} - 3D Metaverse Creator
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>New Character voting</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Treasury Governance</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
                <Tr>
                  <Td>HR Coins</Td>
                  <Td fontSize={"lg"} fontWeight={"thin"} textAlign={"center"}>
                    100,000
                  </Td>
                  <Td fontSize={"lg"} fontWeight={"thin"} textAlign={"center"}>
                    50,000
                  </Td>
                  <Td fontSize={"lg"} fontWeight={"thin"} textAlign={"center"}>
                    25,000
                  </Td>
                  <Td fontSize={"lg"} fontWeight={"thin"} textAlign={"center"}>
                    10,000
                  </Td>
                </Tr>
                <Tr>
                  <Td>Generative Collection proposals</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
                <Tr>
                  <Td>Metaverse Movie</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
                <Tr>
                  <Td>Staking for Humanity</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Digital Board Game</Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"yellow_check.svg"} />
                  </Td>
                  <Td>
                    <SVG_Icon margin={"0 auto"} fileName={"white_check.svg"} />
                  </Td>
                  <Td textAlign={"center"}>-</Td>
                  <Td textAlign={"center"}>-</Td>
                </Tr>
              </Tbody>
              <Tfoot paddingTop={10}>
                <Tr>
                  <Th paddingTop={10} textTransform={"none"}>
                    % of treasury
                  </Th>
                  <Th
                    paddingTop={10}
                    fontWeight={"normal"}
                    fontSize={"md"}
                    textAlign={"center"}
                  >
                    60%
                  </Th>
                  <Th
                    paddingTop={10}
                    fontWeight={"normal"}
                    fontSize={"md"}
                    textAlign={"center"}
                  >
                    50%
                  </Th>
                  <Th
                    paddingTop={10}
                    fontWeight={"normal"}
                    fontSize={"md"}
                    textAlign={"center"}
                  >
                    50%
                  </Th>
                  <Th
                    paddingTop={10}
                    fontWeight={"normal"}
                    fontSize={"md"}
                    textAlign={"center"}
                  >
                    30%
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </>
  );
};

export default HumanityRocksFinance;
