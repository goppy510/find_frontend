"use client";
import { Box, Flex } from "@chakra-ui/react";
import { PromptDetailType, PromptUuid } from "@/features/promptDetail/types/promptDetailTypes";
import useFetchPromptDetail from "@/features/promptDetail/hooks/useFetchPromptDetail";
import {
  DetailHeader,
  Thumbnail,
  About,
  InputExample,
  OutputExample,
  ReadButton
} from "@/features/promptDetail/components/";

type Props = {
  promptUuid: PromptUuid;
};

// mock
// const postDetail: PostDetail = {
//   id: 1,
//   accountName: "dax18",
//   accountLink: 'https://promptdata.com/dax18',
//   avatar: "https://github.com/identicons/pronama.png",
//   title: "Ultimate Marketing Audience",
//   description: "GET INTO THE HEAD OF YOUR TARGET AUDIENCE\nPromptsauce.com presents 🔥 The Ultimate Marketing Audience 🧑‍🤝‍🧑 Insight Builder by Sean Vosler\nWorks with Chat GPT and all third-party tools like Jasper.ai\n\nWHAT THIS PROMPT GIVES YOU...\n1. GET HYPED! Creates a \"call to arms\" style declaration that spells out the importance of your company & product's mission.\n2. GET PERSONAL! Get a first-person point-of-view account of the journey your target audience takes in their head overcoming the problem your product solves.\n3. GET INSIGHTS - the first thing you need to do before creating any great copy is *understand your audience*, this prompt outputs the key insights about the fears, hopes, and motivations behind your target audience.\n\nThis complex multiphase prompt will output a series of audience insights for any product, allowing you to understand better the fears, desires, and motivations of your target audience.\n\nUse these insights to further generate useful marketing materials and marketing copy.\n\n** Comprehensive Audience Insight Tool – This allows you to gain a deep understanding of your target audience’s fears, desires, and motivations.\n\n** Improved Ability to Create Relevant and Engaging Content - By gaining deeper insights into your target audience’s interests, it helps you better craft messages that resonate with them.\n\n** Works With Chat GPT & Third-Party Tools – Compatible with Jasper.ai and other third-party tools so you can easily integrate the Ultimate Marketing Audience Insight Builder into your existing workflow. \n\n** Increased Efficiency & Productivity – Automates tedious tasks associated with gathering insights about potential buyers, which saves time and resources that would otherwise be spent manually researching. \n\n** Multiphase Prompt Output - Generates comprehensive data in an easy to understand format ensuring accuracy while providing maximum value for minimal effort expended by the user. \n\n** Cost Savings – Reduces costs associated with buying market research reports from external parties as the tool provides all necessary information within one platform at no additional cost.\n\nHave any questions? Need help getting the perfect output? Get support directly from Sean via help@sean.co\n\n- Writers – Use the Ultimate Marketing Audience Insight Builder to quickly and easily generate data-driven content ideas by gaining deeper insights into their target audience’s wants, needs, and motivations. \n\n- Marketers – Gain a better understanding of potential buyers through the use of this multiphase prompt, which provides an easy-to-understand format for maximum efficiency. \n\n- Copywriters - Create compelling copy by leveraging the advantage of deeper insights into customer buying behavior that can be obtained from the Ultimate Marketing Audience Insight Builder.\n\nYou're gonna LOVE the report this prompt outputs, it'll give you everything you need to understand your target audience and serve as a foundation for you to build out any high-quality marketing campaign!\n\nBONUS! \n\nI've also included a simple-to-follow series of prompts that complement this report to generate marketing emails, ad copy, educational materials (for blogs and training)... simply follow along to output all sorts of amazing materials that will help you get your product or service out to the world!\n\n====== EXAMPLE OUTPUT =====\nA Call to Arms!\n\nWe, the stalwart warriors of PromptBase, stand the precipice of a new era. Our mission is clear - to empower creative early adopters to unlock their potential and unleash their creativity with the PromptBase Marketplace. We must rise",
//   exampleInput: "DETAILS: Company name: Jasper.ai\nProduct name: Jasper Writing Assistant\nProduct description: Jasper is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster.\nTarget Audience: Writers\nDescribe Your Target Audience: Writers who need help overcoming writers block",
//   exampleOutput: "A Call to Arms!\nThe writer's world is in peril, besieged by the tyranny of creative blocks and a dearth of ideas. But there is hope! For the brave souls who answer the call, Jasper.ai has come to the rescue with the Jasper Writing Assistant. This revolutionary product provides the tools to help writers break through creative barriers and unlock their potential. Join us in this fight and let us together forge a new dawn of creativity and inspiration! \n\nThe Voice of The Customer\nThe writer felt the weight of the world on their shoulders as they stared at the blank page. Each passing moment felt like an eternity as their mind raced in search the perfect idea. No matter how hard they tried, the words just wouldn't come. The frustration of being unable to break through the creative blocks was like a heavy blanket of despair that threatened to smother them. \n\nUnderstanding The Customer's Fears\n1. Fear of failure: Writers may fear that they will not be able to create something that meets their own standards.\n2. Fear of the unknown: Writers may fear that they are unable to come up with something truly unique and original.\n3. Fear of rejection: Writers may fear that their work will be rejected by their peers or the public.\n\nUnderstanding Customer's Hopes\n1. Hope for success: Writers hope that their work will be successful and appreciated.\n2. Hope for recognition: Writers hope that their work will be noticed and appreciated.\n3. Hope for inspiration: Writers hope that they will be able to come up with ideas that are truly unique and inspiring.\n\nUnderstanding Customer's Motives\n1. Motivation to create: Writers are motivated to create something new and unique. Key barriers include lack of ideas, fear of failure, and fear of rejection.\n2. Motivation to improve: Writers are motivated to improve their writing skills and techniques. Key barriers include lack of time and resources.\n3. Motivation to succeed: Writers are motivated to succeed and make a name for themselves. Key barriers include lack of support and recognition.",
//   category: "セールスプロモーション",
//   likes: 20,
//   views: 100,
//   rating: 5.0,
//   memberViews: 2000,
//   model: "GPT-3.5"
// }

export default function PromptDetail({ promptUuid }: Props) {
  const { promptDetail, errorMessage } = useFetchPromptDetail(promptUuid);

  return (
    <Box minH="100vh" maxW="100%"  m="0 auto">
      <Thumbnail category={promptDetail.category} />
      <DetailHeader
        id={promptDetail.id}
        promptUuid={promptDetail.promptUuid}
        category={promptDetail.category}
        title={promptDetail.title}
        about={promptDetail.about}
        inputExample={promptDetail.inputExample}
        outputExample={promptDetail.outputExample}
        prompt={promptDetail.prompt}
        nickname={promptDetail.nickname}
        bookmarksCount={promptDetail.bookmarksCount}
        likesCount={promptDetail.likesCount}
        generativeAiModel={promptDetail.generativeAiModel}
        updatedAt={promptDetail.updatedAt}
      />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">このプロンプトについて</Box>
      <About text={promptDetail.about} />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">入力例</Box>
      <InputExample text={promptDetail.inputExample} />
      <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">出力例</Box>
      <OutputExample text={promptDetail.outputExample} />

      <Box w={{ base: '100%' }} >
        <Flex justifyContent="center" alignItems="center" my="5">
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
  );
}
