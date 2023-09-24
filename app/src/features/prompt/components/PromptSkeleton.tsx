import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";

export function PromptSkeleton() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      h="20em"
      boxShadow="xl"
    >
      <Grid
        templateAreas={`
          "categoryIcon categoryIcon categoryIcon"
          "category category category"
          "title title title"
          "description description description"
          "memberViews likes views"
        `}
        templateRows="1fr 0.25fr 0.25fr 0.25fr 8.25fr"
        templateColumns="4fr 4fr 4fr"
      >
        <GridItem area="categoryIcon">
          <Skeleton circle height="112px" width="512px" />
        </GridItem>
        <GridItem area="category" my={3} mx={6}>
          <Skeleton height="24px" width="101px" />
        </GridItem>
        <GridItem area="title" mx={6}>
          <Skeleton height="24px" width="180px" />
        </GridItem>
        <GridItem area="description" my={3} mx={6}>
          <Skeleton height="12px" width="220px" />
        </GridItem>
        <GridItem area="memberViews" my={2} mx={6}>
          <Skeleton height="10px" width="50px" />
        </GridItem>
        <GridItem area="likes" my={2} mx={6}>
          <Skeleton height="10px" width="50px" />
        </GridItem>
        <GridItem area="views" my={2} mx={6}>
          <Skeleton height="10px" width="50px" />
        </GridItem>
      </Grid>
    </Box>
  );
}
