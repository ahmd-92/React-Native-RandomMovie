import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import ChooseMovieScreen from "./Screens/ChooseMovieScreen";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Movies",
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#42a5f5"
    }
  },
  DetailsScreen: {
    screen: DetailsScreen,
    navigationOptions: {
      title: "Movie Details",
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#42a5f5"
    }
  },
  ChooseMovieScreen: {
    screen: ChooseMovieScreen,
    navigationOptions: {
      title: "Choose your Movie",
      headerStyle: { backgroundColor: "#000" },
      headerTintColor: "#42a5f5"
    }
  }
});
const App = createAppContainer(AppNavigator);
export default App;
