import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.bg.primary,
}));

const RestaurantCardCover = styled(Card.Cover)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
}));

const Title = styled.Text(({ theme }) => ({
  padding: theme.space[3],
  color: theme.colors.ui.primary,
  fontFamily: theme.fonts.body,
}));

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    // icon,
    photos = ["https://picsum.photos/700"],
    // address = "100, some random streets",
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}

export { RestaurantInfoCard };
