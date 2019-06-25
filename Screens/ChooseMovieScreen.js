import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import React, { Components } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView,
  ActivityIndicator
} from "react-native";

import RNPickerSelect from "react-native-picker-select";

const axios = require("axios");

class ChooseMovieScreen extends React.Component {
  state = {
    year: "2019",
    Movies: [],
    genresId: "28",
    loading: true
  };

  componentDidMount = () => {
    let ref = this;
    //api_key=4d46d3ac1707715334e8c9ef65273404
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4d46d3ac1707715334e8c9ef65273404&with_genres=" +
          this.state.genresId +
          "&primary_release_year=" +
          this.state.year
      )
      .then(function(response) {
        // handle success
        ref.setState({
          Movies: response.data.results,
          loading: false
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#2b2b2b",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size={60} color="#fff" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>{"Top Movies in  "}</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.year}
              style={{ height: 30, width: 120, color: "#000" }}
              onValueChange={(itemValue, itemPosition) => {
                console.log(itemValue);
                let ref = this;

                ref.setState({ year: itemValue });

                axios
                  .get(
                    "https://api.themoviedb.org/3/discover/movie?api_key=4d46d3ac1707715334e8c9ef65273404&with_genres=" +
                      this.state.genresId +
                      "&primary_release_year=" +
                      itemValue
                  )
                  .then(function(response) {
                    // handle success
                    console.log(response);
                    ref.setState({
                      Movies: response.data.results
                    });
                  })
                  .catch(function(error) {
                    // handle error
                    console.log(error);
                  })
                  .finally(function() {
                    // always executed
                  });
              }}
            >
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2017" value="2017" />
              <Picker.Item label="2016" value="2016" />
              <Picker.Item label="2015" value="2015" />
              <Picker.Item label="2014" value="2014" />
              <Picker.Item label="2013" value="2013" />
              <Picker.Item label="2012" value="2012" />
              <Picker.Item label="2011" value="2011" />
              <Picker.Item label="2010" value="2010" />
              <Picker.Item label="2009" value="2009" />
              <Picker.Item label="2008" value="2008" />
              <Picker.Item label="2007" value="2007" />
              <Picker.Item label="2006" value="2006" />
              <Picker.Item label="2005" value="2005" />
              <Picker.Item label="2004" value="2004" />
              <Picker.Item label="2003" value="2003" />
              <Picker.Item label="2002" value="2002" />
              <Picker.Item label="2001" value="2001" />
              <Picker.Item label="2000" value="2000" />
              <Picker.Item label="1999" value="1999" />
              <Picker.Item label="1998" value="1998" />
              <Picker.Item label="1997" value="1997" />
              <Picker.Item label="1996" value="1996" />
              <Picker.Item label="1995" value="1995" />
              <Picker.Item label="1994" value="1994" />
              <Picker.Item label="1993" value="1993" />
              <Picker.Item label="1992" value="1992" />
              <Picker.Item label="1991" value="1991" />
              <Picker.Item label="1990" value="1990" />
              <Picker.Item label="1989" value="1989" />
              <Picker.Item label="1988" value="1988" />
              <Picker.Item label="1987" value="1987" />
              <Picker.Item label="1986" value="1986" />
              <Picker.Item label="1985" value="1985" />
              <Picker.Item label="1984" value="1984" />
              <Picker.Item label="1983" value="1983" />
              <Picker.Item label="1982" value="1982" />
              <Picker.Item label="1981" value="1981" />
              <Picker.Item label="1980" value="1980" />
              <Picker.Item label="1979" value="1979" />
              <Picker.Item label="1978" value="1978" />
              <Picker.Item label="1977" value="1977" />
              <Picker.Item label="1976" value="1976" />
              <Picker.Item label="1975" value="1975" />
              <Picker.Item label="1974" value="1974" />
              <Picker.Item label="1973" value="1973" />
              <Picker.Item label="1972" value="1972" />
              <Picker.Item label="1971" value="1971" />
              <Picker.Item label="1970" value="1970" />
            </Picker>
          </View>
        </View>
        <View style={{ height: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>{"With Genres  "}</Text>

          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.genresId}
              style={{ height: 30, width: 150, color: "#000" }}
              onValueChange={(itemValue, itemPosition) => {
                console.log(itemValue);
                let ref = this;

                ref.setState({ genresId: itemValue });

                axios
                  .get(
                    "https://api.themoviedb.org/3/discover/movie?api_key=4d46d3ac1707715334e8c9ef65273404&with_genres=" +
                      itemValue +
                      "&primary_release_year=" +
                      this.state.year
                  )
                  .then(function(response) {
                    // handle success
                    console.log(response);
                    ref.setState({
                      Movies: response.data.results
                    });
                  })
                  .catch(function(error) {
                    // handle error
                    console.log(error);
                  })
                  .finally(function() {
                    // always executed
                  });
              }}
            >
              <Picker.Item label="Action" value="28" />
              <Picker.Item label="Adventure" value="12" />
              <Picker.Item label="Animation" value="16" />
              <Picker.Item label="Comedy" value="35" />
              <Picker.Item label="Crime" value="80" />
              <Picker.Item label="Documentary" value="99" />
              <Picker.Item label="Drama" value="18" />
              <Picker.Item label="Family" value="10751" />
              <Picker.Item label="Fantasy" value="14" />
              <Picker.Item label="History" value="36" />
              <Picker.Item label="Horror" value="27" />
              <Picker.Item label="Mystery" value="9648" />
              <Picker.Item label="Romance" value="10749" />
              <Picker.Item label="Science Fiction" value="878" />
              <Picker.Item label="Thriller" value="53" />
              <Picker.Item label="War" value="10752" />
              <Picker.Item label="Western" value="37" />
              <Picker.Item label="TV Movie" value="10770" />
            </Picker>
          </View>
        </View>

        <View style={{ height: 50 }} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {this.state.Movies.map(movie => (
            <View key={movie.id} style={styles.Movie}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("DetailsScreen", {
                    id: movie.id
                  });
                }}
              >
                <Image
                  style={styles.image}
                  source={
                    movie.poster_path
                      ? {
                          uri:
                            "https://image.tmdb.org/t/p/w300/" +
                            movie.poster_path
                        }
                      : require("../img/noImage.jpg")
                  }
                />
              </TouchableOpacity>
              <View style={styles.space} />
              <Text style={styles.titleText}>
                Title: <Text style={styles.text}>{movie.title}</Text>
              </Text>
              <View style={styles.space} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 25, color: "#fbc02d" }}>⭐ </Text>
                <Text style={{ color: "#fbc02d", fontSize: 18 }}>
                  {movie.vote_average}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

class RandomMovieScreen extends React.Component {
  state = {
    randomPoster: "",
    randomTitle: "",
    randomRate: "",
    movieId: "",
    loading: true
  };

  componentDidMount = () => {
    const yearsList = [
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970
    ];
    const generesIdList = [
      28,
      12,
      16,
      35,
      80,
      99,
      18,
      10751,
      14,
      36,
      27,
      9648,
      10749,
      878,
      53,
      10752,
      37,
      10770
    ];
    const yearsListLength = yearsList.length - 1;
    const generesIdListLength = generesIdList.length - 1;
    const randomYearIndex = Math.floor(
      Math.random() * (+yearsListLength - 0) + 0
    );
    const randomGeneresIdIndex = Math.floor(
      Math.random() * (+generesIdListLength - 0) + 0
    );
    const randomYear = yearsList[randomYearIndex];
    const randomGeneresId = generesIdList[randomGeneresIdIndex];
    let ref = this;
    //api_key=4d46d3ac1707715334e8c9ef65273404
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4d46d3ac1707715334e8c9ef65273404&with_genres=" +
          randomGeneresId +
          "&primary_release_year=" +
          randomYear
      )
      .then(function(response) {
        // handle success
        const randomIndex = Math.floor(Math.random() * (+19 - 0) + 0);
        ref.setState({
          randomPoster: response.data.results[randomIndex].poster_path,
          randomTitle: response.data.results[randomIndex].title,
          randomRate: response.data.results[randomIndex].vote_average,
          movieId: response.data.results[randomIndex].id,
          loading: false
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  getRandomMovie = () => {
    const yearsList = [
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
      1993,
      1992,
      1991,
      1990,
      1989,
      1988,
      1987,
      1986,
      1985,
      1984,
      1983,
      1982,
      1981,
      1980,
      1979,
      1978,
      1977,
      1976,
      1975,
      1974,
      1973,
      1972,
      1971,
      1970
    ];
    const generesIdList = [
      28,
      12,
      16,
      35,
      80,
      99,
      18,
      10751,
      14,
      36,
      27,
      9648,
      10749,
      878,
      53,
      10752,
      37,
      10770
    ];
    const yearsListLength = yearsList.length - 1;
    const generesIdListLength = generesIdList.length - 1;
    const randomYearIndex = Math.floor(
      Math.random() * (+yearsListLength - 0) + 0
    );
    const randomGeneresIdIndex = Math.floor(
      Math.random() * (+generesIdListLength - 0) + 0
    );
    const randomYear = yearsList[randomYearIndex];
    const randomGeneresId = generesIdList[randomGeneresIdIndex];
    let ref = this;
    //api_key=4d46d3ac1707715334e8c9ef65273404
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4d46d3ac1707715334e8c9ef65273404&with_genres=" +
          randomGeneresId +
          "&primary_release_year=" +
          randomYear
      )
      .then(function(response) {
        // handle success
        const randomIndex = Math.floor(Math.random() * (+19 - 0) + 0);
        ref.setState({
          randomPoster: response.data.results[randomIndex].poster_path,
          randomTitle: response.data.results[randomIndex].title,
          randomRate: response.data.results[randomIndex].vote_average,
          movieId: response.data.results[randomIndex].id
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#2b2b2b",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size={60} color="#fff" />
        </View>
      );
    }
    return (
      <View style={styles.RandomContainer}>
        <View style={styles.Movie}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("DetailsScreen", {
                id: this.state.movieId
              });
            }}
          >
            <Image
              style={styles.image}
              source={
                this.state.randomPoster
                  ? {
                      uri:
                        "https://image.tmdb.org/t/p/w300/" +
                        this.state.randomPoster
                    }
                  : require("../img/noImage.jpg")
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.space} />
        <Text style={styles.titleText}>
          Title: <Text style={styles.text}>{this.state.randomTitle}</Text>
        </Text>
        <View style={styles.space} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "#fbc02d" }}>⭐ </Text>
          <Text style={{ color: "#fbc02d", fontSize: 18 }}>
            {this.state.randomRate}
          </Text>
        </View>

        <View style={{ height: 100 }} />
        <Text style={styles.text}>{"Click to get random movie"}</Text>
        <View style={{ height: 5 }} />
        <TouchableOpacity onPress={this.getRandomMovie} style={styles.button}>
          <Text style={styles.buttonText}>Random Movie</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  RandomContainer: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10
  },
  space: {
    height: 10
  },
  picker: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42a5f5",
    borderRadius: 50
  },
  image: {
    width: 200,
    height: 300
  },
  Movie: {
    width: 200,
    height: 300,
    marginBottom: 10,
    marginRight: 5
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
  titleText: {
    color: "#42a5f5",
    fontSize: 16
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  buttonText: {
    color: "#000",
    fontSize: 18
  }
});

//Bottom Navigator:::::::::::::::::::::::::::::
const ChooseMovieStack = createStackNavigator({
  Choose: {
    screen: ChooseMovieScreen,
    navigationOptions: {
      header: null
    }
  }
});

const RandomMovieStack = createStackNavigator({
  Random: {
    screen: RandomMovieScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Choose: ChooseMovieStack,
      Random: RandomMovieStack
    },
    {
      tabBarOptions: {
        style: { backgroundColor: "#fff" },
        labelStyle: { fontSize: 16, color: "#000", marginBottom: 15 },
        inactiveBackgroundColor: "#2b2b2b"
      }
    }
  )
);
