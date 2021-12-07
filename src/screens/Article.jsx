import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomNav from "../components/BottomNav";



function Article() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/budget.jpeg")}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>Getting Control Over Your Finances.</Text>
        <View style={styles.articleInfo}>
          <Image
            source={require("../../assets/author.jpeg")}
            style={styles.descriptionImage}
          />
          <Text style={styles.author}>Jane Doe</Text>
          <Text style={styles.duration}>3 min read</Text>
        </View>
        <Text style={styles.articleText}>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </Text>

        <Text style={styles.articleText}>
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>


        <Text style={styles.articleText}>
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>


        <Text style={styles.articleText}>
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        
      </View>
     </ScrollView>
      <View style={styles.bottom}>
          <BottomNav/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    // marginTop: 60,
    // marginHorizontal: 20,
  },
  articleInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal:20,
  },
  imageContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:15,
    marginBottom:10,
  },
  description: {
    flex: 5,
    marginTop: 20,
  },
  image: {
    width: 350,
    height: 350,
    flex:1,

    // justifyContent:"center"
    // alignItems:"flex-start",
    borderRadius: 15,
  },
  descriptionImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal:20,
  },
  author: {
    fontSize: 16,
    marginRight: 20,
    
  
  },
  duration: {
    fontSize: 16,
  },
  articleText:{
      fontSize:16,
      marginBottom:10,
      textAlign:"justify",
      marginHorizontal:20,
     
  },
  bottom:{
      flex:0.9,
      alignItems:"center",
     
    //   position:"fixed"
  }
});

export default Article;
