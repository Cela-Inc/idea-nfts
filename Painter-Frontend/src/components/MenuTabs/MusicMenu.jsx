import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import Countdown from "react-countdown";
import MenuItem from "./MenuItem";
import { v4 as uuidv4 } from "uuid";

const songList = [
  {
    title: "Song One",
    artist: "Lorem Ipsum",
    song: "/fun-life-112188.mp3",
    thumbnail: "/song_1.jpg",
  },
  {
    title: "Song Two",
    artist: "Lorem Ipsum",
    song: "/lofi-study-112191.mp3",
    thumbnail: "/song_2.jpg",
  },
  {
    title: "Song Three",
    artist: "Lorem Ipsum",
    song: "/soft-beat-115017.mp3",
    thumbnail: "/song_3.jpg",
  },
];

const MusicMenu = () => {
  const { music, setMusic } = useCreatorStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MenuItem
      placeholder={"Search songs"}
      searchTerm={searchTerm}
      setSearchTerm={(e) => setSearchTerm(e)}
      columns={[1]}
    >
      {songList.map((item) => (
        <Flex
          key={uuidv4()}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"20rem"}
          gap={6}
          display={
            searchTerm === ""
              ? "flex"
              : item.title.includes(searchTerm) ||
                item.artist.includes(searchTerm)
              ? "flex"
              : "none"
          }
          _hover={{
            opacity: "0.75",
            cursor: "pointer",
          }}
          _active={{
            opacity: "0.5",
          }}
          onClick={() => setMusic(item)}
        >
          <Image
            borderRadius={10}
            height={"3rem"}
            width={"3rem"}
            alt={item.title}
            src={import.meta.env.VITE_ASSETS_PATH + "/images" + item.thumbnail}
          />
          <Flex
            flexDir={"column"}
            justifyContent='center'
            alignItems={"flex-start"}
            flex={1}
            gap={1}
          >
            <Text
              fontSize={"md"}
              fontWeight={music.song === item.song ? 500 : 400}
              opacity={music.song === item.song ? 1 : 0.5}
            >
              {item.title}
            </Text>
            <Text opacity={0.5} fontSize={"x-small"}>
              {item.artist}
            </Text>
          </Flex>
          <Text textAlign={"right"} opacity={0.5} fontSize={"x-small"}>
            <Countdown date={Date.now() + 5000000}>
              <Text>Unavailable</Text>
            </Countdown>
          </Text>
        </Flex>
      ))}
    </MenuItem>
  );
};

export default MusicMenu;
