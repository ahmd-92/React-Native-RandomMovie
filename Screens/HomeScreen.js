import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

const axios = require("axios");

export default class HomeScreen extends React.Component {
  state = {
    TopMovies: [],
    LatestMovies: [],
    UpcomingMovies: [],
    loading: true
  };

  toChooseMovie = () => {
    const { navigate } = this.props.navigation;
    navigate("ChooseMovieScreen");
  };

  componentDidMount = () => {
    let ref = this;
    //4d46d3ac1707715334e8c9ef65273404
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=4d46d3ac1707715334e8c9ef65273404&language=en-US"
      )
      .then(function(response) {
        // handle success
        ref.setState({
          TopMovies: response.data.results,
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

    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4d46d3ac1707715334e8c9ef65273404&language=en-US&page=1"
      )
      .then(function(response) {
        // handle success
        console.log(response.data.results);
        ref.setState({
          LatestMovies: response.data.results
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });

    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=4d46d3ac1707715334e8c9ef65273404&language=en-US&page=1"
      )
      .then(function(response) {
        // handle success
        ref.setState({
          UpcomingMovies: response.data.results
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.Scrollcontainer}
        >
          <Text style={styles.titles}>Now Playing :</Text>
          <View style={styles.space} />

          <ScrollView
            style={{ height: 440 }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {this.state.LatestMovies.map(movie => (
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
                <Text style={styles.titleText}>
                  Title: <Text style={styles.text}>{movie.title}</Text>
                </Text>
                <View style={{ height: 5 }} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 25, color: "#fbc02d" }}>⭐ </Text>
                  <Text style={{ color: "#fbc02d", fontSize: 18 }}>
                    {movie.vote_average}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.titles}>Upcoming : </Text>
          <View style={styles.space} />
          <ScrollView
            style={{ height: 440 }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {this.state.UpcomingMovies.map(movie => (
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
                <Text style={styles.titleText}>
                  Title: <Text style={styles.text}>{movie.title}</Text>
                </Text>
                <View style={{ height: 5 }} />
                <Text style={styles.titleText}>
                  Release Date:{" "}
                  <Text style={styles.text}>{movie.release_date}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>

          <View style={{ height: 20 }} />

          <Text style={styles.titles}>Top Rated : </Text>
          <View style={styles.space} />

          <ScrollView
            style={{ height: 440 }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {this.state.TopMovies.map(movie => (
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
                <Text style={styles.titleText}>
                  Title: <Text style={styles.text}>{movie.title}</Text>
                </Text>
                <View style={{ height: 5 }} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 25, color: "#fbc02d" }}>⭐ </Text>
                  <Text style={{ color: "#fbc02d", fontSize: 18 }}>
                    {movie.vote_average}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View id={"space"} style={{ height: 140 }} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.toChooseMovie}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10
  },
  Scrollcontainer: {
    flex: 1
  },
  space: {
    height: 10
  },
  titles: {
    color: "#fff",
    fontSize: 22,
    marginTop: 10
  },
  titleText: {
    color: "#42a5f5",
    fontSize: 18,
    marginTop: 10
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10
  },
  Movie: {
    width: 200,
    height: 300,
    marginBottom: 10,
    marginRight: 5
  },
  image: {
    width: 200,
    height: 300
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 30
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#2b2b2b",
    fontSize: 22
  }
});
