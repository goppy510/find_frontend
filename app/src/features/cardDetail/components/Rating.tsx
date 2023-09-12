import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

type Props = {
  rating: number;
};

export default function Rating({rating}: Props) {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
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
          {rating}
        </Text>
      </Box>
    </Flex>
  );
};
