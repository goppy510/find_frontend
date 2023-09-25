import { Box, Flex } from "@/features/components";
import {
  FaEye,
  FaLaptop,
  FaBookReader,
  FaThumbsUp
} from 'react-icons/fa';

type Props = {
  memberViews: number;
  likes: number;
  views: number;
  model: string;
};

export default function Stat({ memberViews, likes, views, model }: Props) {
  return (
    <Box>
      <Box>
        <Flex alignItems="center">
          <Box as="span" fontWeight="bold" mr="2">
            <FaBookReader />
          </Box>
          <Box as="span">{memberViews}</Box>
        </Flex>
      </Box>
      <Box>
        <Flex alignItems="center">
          <Box as="span" fontWeight="bold" mr="2">
            <FaThumbsUp />
          </Box>
          <Box as="span">{likes}</Box>
        </Flex>
      </Box>
      <Box>
        <Flex alignItems="center">
          <Box as="span" fontWeight="bold" mr="2">
            <FaEye />
          </Box>
          <Box as="span">{views}</Box>
        </Flex>
      </Box>
      <Box>
        <Flex alignItems="center">
          <Box as="span" fontWeight="bold" mr="2">
            <FaLaptop />
          </Box>
          <Box as="span">{model}</Box>
        </Flex>
      </Box>
    </Box>
  );
}
