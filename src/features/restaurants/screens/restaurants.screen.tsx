import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView({
  flex: 1,
  marginTop: StatusBar.currentHeight,
});

const SearchContainer = styled.View(({ theme }) => ({
  padding: theme.space[3],
}));

const RestaurantListContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  padding: theme.space[3],
}));

function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}

export { RestaurantsScreen };
