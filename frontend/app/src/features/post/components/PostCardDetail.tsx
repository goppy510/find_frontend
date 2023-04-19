import React from 'react';
import {
  Box,
  Flex,
  Divider,
  Text,
  Button
} from "@/features/components";
import { PostDetail, PostId } from "@/features/post/types/post_types";
import CategoryIcon from "@/features/components/CategoryIcon";
import {
  FaStar,
  FaStarHalf,
  FaRegStar,
  FaTags,
  FaHeart,
  FaEye,
  FaLaptop
} from 'react-icons/fa';

type Props = {
  id: PostId;
};

// mock
const postDetail: PostDetail = {
  id: 1,
  creatorName: "dax18",
  creatorLink: 'https://promptdata.com/dax18',
  creatorIcon: "https://github.com/identicons/pronama.png",
  title: "Ultimate Marketing Audience",
  description: "GET INTO THE HEAD OF YOUR TARGET AUDIENCE\nPromptsauce.com presents 🔥 The Ultimate Marketing Audience 🧑‍🤝‍🧑 Insight Builder by Sean Vosler\nWorks with Chat GPT and all third-party tools like Jasper.ai\n\nWHAT THIS PROMPT GIVES YOU...\n1. GET HYPED! Creates a \"call to arms\" style declaration that spells out the importance of your company & product's mission.\n2. GET PERSONAL! Get a first-person point-of-view account of the journey your target audience takes in their head overcoming the problem your product solves.\n3. GET INSIGHTS - the first thing you need to do before creating any great copy is *understand your audience*, this prompt outputs the key insights about the fears, hopes, and motivations behind your target audience.\n\nThis complex multiphase prompt will output a series of audience insights for any product, allowing you to understand better the fears, desires, and motivations of your target audience.\n\nUse these insights to further generate useful marketing materials and marketing copy.\n\n** Comprehensive Audience Insight Tool – This allows you to gain a deep understanding of your target audience’s fears, desires, and motivations.\n\n** Improved Ability to Create Relevant and Engaging Content - By gaining deeper insights into your target audience’s interests, it helps you better craft messages that resonate with them.\n\n** Works With Chat GPT & Third-Party Tools – Compatible with Jasper.ai and other third-party tools so you can easily integrate the Ultimate Marketing Audience Insight Builder into your existing workflow. \n\n** Increased Efficiency & Productivity – Automates tedious tasks associated with gathering insights about potential buyers, which saves time and resources that would otherwise be spent manually researching. \n\n** Multiphase Prompt Output - Generates comprehensive data in an easy to understand format ensuring accuracy while providing maximum value for minimal effort expended by the user. \n\n** Cost Savings – Reduces costs associated with buying market research reports from external parties as the tool provides all necessary information within one platform at no additional cost.\n\nHave any questions? Need help getting the perfect output? Get support directly from Sean via help@sean.co\n\n- Writers – Use the Ultimate Marketing Audience Insight Builder to quickly and easily generate data-driven content ideas by gaining deeper insights into their target audience’s wants, needs, and motivations. \n\n- Marketers – Gain a better understanding of potential buyers through the use of this multiphase prompt, which provides an easy-to-understand format for maximum efficiency. \n\n- Copywriters - Create compelling copy by leveraging the advantage of deeper insights into customer buying behavior that can be obtained from the Ultimate Marketing Audience Insight Builder.\n\nYou're gonna LOVE the report this prompt outputs, it'll give you everything you need to understand your target audience and serve as a foundation for you to build out any high-quality marketing campaign!\n\nBONUS! \n\nI've also included a simple-to-follow series of prompts that complement this report to generate marketing emails, ad copy, educational materials (for blogs and training)... simply follow along to output all sorts of amazing materials that will help you get your product or service out to the world!\n\n====== EXAMPLE OUTPUT =====\nA Call to Arms!\n\nWe, the stalwart warriors of PromptBase, stand the precipice of a new era. Our mission is clear - to empower creative early adopters to unlock their potential and unleash their creativity with the PromptBase Marketplace. We must rise",
  exampleInput: "DETAILS: Company name: Jasper.ai\nProduct name: Jasper Writing Assistant\nProduct description: Jasper is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster.\nTarget Audience: Writers\nDescribe Your Target Audience: Writers who need help overcoming writers block",
  exampleOutput: "A Call to Arms!\nThe writer's world is in peril, besieged by the tyranny of creative blocks and a dearth of ideas. But there is hope! For the brave souls who answer the call, Jasper.ai has come to the rescue with the Jasper Writing Assistant. This revolutionary product provides the tools to help writers break through creative barriers and unlock their potential. Join us in this fight and let us together forge a new dawn of creativity and inspiration! \n\nThe Voice of The Customer\nThe writer felt the weight of the world on their shoulders as they stared at the blank page. Each passing moment felt like an eternity as their mind raced in search the perfect idea. No matter how hard they tried, the words just wouldn't come. The frustration of being unable to break through the creative blocks was like a heavy blanket of despair that threatened to smother them. \n\nUnderstanding The Customer's Fears\n1. Fear of failure: Writers may fear that they will not be able to create something that meets their own standards.\n2. Fear of the unknown: Writers may fear that they are unable to come up with something truly unique and original.\n3. Fear of rejection: Writers may fear that their work will be rejected by their peers or the public.\n\nUnderstanding Customer's Hopes\n1. Hope for success: Writers hope that their work will be successful and appreciated.\n2. Hope for recognition: Writers hope that their work will be noticed and appreciated.\n3. Hope for inspiration: Writers hope that they will be able to come up with ideas that are truly unique and inspiring.\n\nUnderstanding Customer's Motives\n1. Motivation to create: Writers are motivated to create something new and unique. Key barriers include lack of ideas, fear of failure, and fear of rejection.\n2. Motivation to improve: Writers are motivated to improve their writing skills and techniques. Key barriers include lack of time and resources.\n3. Motivation to succeed: Writers are motivated to succeed and make a name for themselves. Key barriers include lack of support and recognition.",
  category: "IT",
  price: 300,
  favorites: 20,
  views: 100,
  rating: 5.0,
  sold: 2000,
  model: "GPT-3.5"
}

export default function PostCardDetail({ id }: Props) {
  const Rating: React.FC = () => {
    const maxRating = 5;
    const filledStars = Math.floor(postDetail.rating);
    const hasHalfStar = postDetail.rating % 1 >= 0.5;
    
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} color="gold" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key={filledStars} color="gold" />);
    }
    for (let i = 0; i < maxRating - (filledStars + (hasHalfStar ? 1 : 0)); i++) {
      stars.push(<FaRegStar key={filledStars + (hasHalfStar ? 1 : 0) + i} color="gold" />);
    }
    
    return (
      <Flex alignItems="center">
        {stars}
        <Box ml="1">
          <Text fontWeight="bold" fontSize="sm">
            {postDetail.rating}
          </Text>
        </Box>
      </Flex>
    );
  };

  const BuyButton = () => {
    return (
      <Button
        size="lg"
        colorScheme="blue"
        _hover={{ bg: "blue.300" }}
        _active={{ bg: "blue.700" }}
        _focus={{ boxShadow: "none" }}
      >
        買ってみる
      </Button>
    );
  }

  const ThumbnailComponent = () => {
    return (
      <Box w={{ base: '100%' }} h={{ md: '30vh' }}>
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Box mx="auto" w="100%" h="100%">
            <CategoryIcon category={postDetail.category} />
          </Box>
        </Flex>
      </Box>
    );
  };
  
  const HeaderComponent = () => {
    return (
      <Box w={{ base: '100%' }} h={{ md: '30vh' }}>
        <Flex justifyContent="space-between" alignItems="center" py="8" my="5">
          <Box mx="auto">
            <Box as="h1" fontSize="3xl" fontWeight="bold" mb="4">
              {postDetail.title}
            </Box>
          </Box>
        </Flex>
        <Box display={{base: 'block', md: 'flex'}}>
          <Box w={{ base: '100%', md: '50%'}} >
            <Flex justifyContent="space-between" alignItems="center" my="5">
              <Box as="a" href={postDetail.creatorLink} display="flex" alignItems="center">
                <Box w="32px" h="32px" borderRadius="50%" overflow="hidden">
                  <Box as="img" src={postDetail.creatorIcon} w="100%" h="100%" objectFit="cover" />
                </Box>
                <Box ml="2">
                  <Box as="span" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                    {postDetail.creatorName}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Rating />
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Box as="span" fontWeight="bold" mr="2">
                    <FaTags />
                  </Box>
                  <Box as="span">{postDetail.sold}</Box>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Box as="span" fontWeight="bold" mr="2">
                    <FaHeart color="pink" />
                  </Box>
                  <Box as="span">{postDetail.favorites}</Box>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Box as="span" fontWeight="bold" mr="2">
                    <FaEye />
                  </Box>
                  <Box as="span">{postDetail.views}</Box>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Box as="span" fontWeight="bold" mr="2">
                    <FaLaptop />
                  </Box>
                  <Box as="span">{postDetail.model}</Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: '100%', md: '50%'}} >
            <Flex justifyContent="center" alignItems="center" my="1">
              <Box>
                <Flex alignItems="center">
                  <Box as="span" fontWeight="bold" fontSize="2xl">
                    {postDetail.price}円
                  </Box>
                  <Box mx="2" />
                  <Box as="span" fontWeight="bold" mr="2">
                    <BuyButton />
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

  const DescriptionComponent = () => {
    const lines = postDetail.description.split('\n');
    const height = `${2 + lines.length * 1.5}em`;
  
    return (
      <Box w={{ base: '100%' }} minH={{ base: height }} bg="white.100">
        <Flex justifyContent="space-between" alignItems="center">
          <Box mx="auto">
            <Box fontSize="1xl" mb="4">
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };  

  // 非会員に表示する
  const ExampleInputComponent = () => {
    const lines = postDetail.exampleInput.split('\n');
    const height = `${2 + lines.length * 1.5}em`;
  
    return (
      <Box w={{ base: '100%' }} minH={{ base: height }} bg="blue.900" color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Box mx="auto">
            <Box fontSize="1xl" mb="4" mx="3">
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };  


  const ExampleOutputComponent = () => {
    const lines = postDetail.exampleOutput.split('\n');
    const height = `${2 + lines.length * 1.5}em`;
  
    return (
      <Box w={{ base: '100%' }} minH={{ base: height }} bg="rgb(52, 53, 65)" color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Box mx="auto">
            <Box fontSize="1xl" mb="4" mx="3">
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };  


  return (
    <Box minH="100vh" maxW="1200px"  m="0 auto">
      <ThumbnailComponent />
      <HeaderComponent />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">このプロンプトについて</Box>
      <DescriptionComponent />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">入力例</Box>
      <ExampleInputComponent />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">出力例</Box>
      <ExampleOutputComponent />

      <Box w={{ base: '100%' }} >
        <Flex justifyContent="center" alignItems="center" my="5">
          <Box>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" fontSize="2xl">
                {postDetail.price}円
              </Box>
              <Box mx="2" />
              <Box as="span" fontWeight="bold" mr="2">
                <BuyButton />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
