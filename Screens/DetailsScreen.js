import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const axios = require("axios");

export default class DetailsScreen extends React.Component {
  state = {
    poster_path: "",
    title: "",
    overview: "",
    release_date: "",
    vote_average: "",
    loading: true
  };

  componentDidMount = () => {
    const movieId = this.props.navigation.state.params.id;
    let ref = this;
    //api_key=4d46d3ac1707715334e8c9ef65273404
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=4d46d3ac1707715334e8c9ef65273404&language=en-US"
      )
      .then(function(response) {
        // handle success
        console.log(response);
        ref.setState({
          poster_path: response.data.poster_path,
          title: response.data.title,
          overview: response.data.overview,
          release_date: response.data.release_date,
          vote_average: response.data.vote_average,
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
      <ScrollView style={{ flex: 1, backgroundColor: "#2b2b2b" }}>
        <View style={styles.container}>
          <View style={{ height: 40 }} />
          <Image
            style={styles.image}
            source={
              this.state.poster_path
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/w300/" +
                      this.state.poster_path
                  }
                : require("../img/noImage.jpg")
            }
          />
          <View style={{ height: 20 }} />

          <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>
              Title: <Text style={styles.text}>{this.state.title}</Text>
            </Text>
            <View style={{ height: 5 }} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "#fbc02d" }}>⭐ </Text>
              <Text style={{ color: "#fbc02d", fontSize: 18 }}>
                {this.state.vote_average}
              </Text>
            </View>
            <View style={{ height: 5 }} />
            <Text style={styles.titleText}>
              Overview: <Text style={styles.text}>{this.state.overview}</Text>
            </Text>
            <View style={{ height: 5 }} />
            <Text style={styles.titleText}>
              Release Date:{" "}
              <Text style={styles.text}>{this.state.release_date}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10
  },
  detailsContainer: {
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingRight: 15
  },
  image: {
    width: 200,
    height: 300
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
  titleText: {
    color: "#42a5f5",
    fontSize: 20
  }
});
