import {
  Box,
  Flex,
  Divider
} from "@/features/components";
import {
  Rating,
  ReadButton,
  Creator,
  Title,
  MemberViews,
  Likes,
  Views,
  Model
} from "./index"

type Props = {
  title: string;
  avatar: string;
  accountLink: string;
  accountName: string;
  rating: number;
  memberViews: number;
  likes: number;
  views: number;
  model: string;
};


export default function DetailHeader({
  title,
  avatar,
  accountLink,
  accountName,
  rating,
  memberViews,
  likes,
  views,
  model
}: Props) {
  return (
    <Box w={{ base: '100%' }} h={{ md: '30vh' }}>
      <Title title={title} />
      <Box display={{base: 'block', md: 'flex'}}>
        <Box w={{ base: '100%', md: '50%'}} >
          <Flex justifyContent="space-between" alignItems="center" my="5">
            <Creator avatar={avatar} accountLink={accountLink} accountName={accountName} />
            <Box>
              <Rating rating={rating} />
            </Box>
            <MemberViews memberViews={memberViews} />
            <Likes likes={likes} />
            <Views views={views} />
            <Model model={model} />
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '50%'}} >
          <Flex justifyContent="center" alignItems="center" my="1">
            <Box>
              <Flex alignItems="center">
                <Box as="span" fontWeight="bold" mr="2">
                  <ReadButton />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Divider borderColor="gray.300" />
    </Box>
  );
}