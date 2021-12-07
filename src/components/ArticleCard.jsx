import React from "react";
import { Image, StyleSheet, View,Text, Pressable,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";


function ArticleCard({title,author}) {
    console.log(title)
    const navigation=useNavigation()

    const viewArticle=()=>{
        navigation.navigate("Article")
    }

  return (
    <Pressable onPress={()=>navigation.navigate("Article")}>  
    <View style={[styles.container]} >
      <View style={styles.imageContainer} >
      <Image
        source={require("../../assets/budget.jpeg")}
        style={styles.image}   
      />
      </View>
     
      <View style={styles.cardDescription}>
        <Text numberOfLines={2} style={styles.descriptionHeader}>{title}</Text>
        <View style={styles.authorRow}>
            <Image source={require("../../assets/author.jpeg")} style={styles.authorImage}/>
            <View>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.minutes}>3 minute read</Text>
            </View>    
        </View>
      </View>
     
    </View>
    </Pressable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 12,
    marginTop: 15,
    // marginHorizontal: 20,
    borderColor:"#F0F0F0",
    borderWidth:1,
    // justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
   
  },
  shadowProps:{
    shadowColor:"#171717",
    shadowOffset:{width:-2, height:4,},
    shadowOpacity:0.2
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 12,
    // flex:0.9
  },
  imageContainer:{
      flex:0.3
  },
  cardDescription:{
    marginLeft:15,
    flex:0.7

  },
  descriptionHeader:{
      fontWeight:"bold",
      fontSize:18,
      marginBottom:10,
      marginTop:10,
    
  },
  author:{
    fontSize:16,
  },
  authorImage:{
      width:35,
      height:35,
      borderRadius:50,
      marginRight:8
  },
  authorRow:{
      flexDirection:"row",
      marginBottom:10,
  },
  minutes:{
    color:"#A8A8A8"
  },
});

export default ArticleCard;
