import React from "react";
import { Text, View ,StyleSheet,Image, TouchableOpacity, FlatList} from "react-native";
import image from "../../assets/Sample.png"
import ArticleCard from "../components/ArticleCard";
import BottomNav from "../components/BottomNav";
import ExpenseCard from "../components/ExpenseCard";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

function Home(){
    const navigation=useNavigation()
    const handleMove=()=>{
        navigation.navigate("Balance")
    }
    return(
        
       <View style={styles.container}>
           <View style={styles.screenHeader}>
               <View>
               <Text style={[styles.headerText,styles.margin20]}>Welcome Back,</Text>
               <Text style={[styles.headerText,styles.margin20]}>Francis</Text>
               </View>
               <Image style={[styles.avatar,styles.margin20]} source={image}/>
           </View>
           <View style={styles.floatCardContainer}>
                <View style={styles.margin20}>
                    <Text style={styles.subHeader}>My Balance</Text>
                    <Text style={styles.dollarSign}>$<Text style={styles.amount}>2042</Text></Text>
                </View>
                <TouchableOpacity onPress={handleMove} style={[styles.viewButton,styles.margin20]}>
                    <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.articlesContainer}>
               <View style={styles.articleHeaderRow}>
               <Text style={styles.articlesHeader}>Latest Articles</Text>
               <Text style={styles.moreText}>See More</Text>
               </View>
               <ArticleCard/>
           </View>
           <View style={styles.transactionContainer}>
           <View style={styles.transactionHeaderRow}>
               <Text style={styles.transactionHeader}>Recent Transactions</Text>
               <Text style={styles.moreText}>See More</Text>
            </View>  
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
           </View>
           <View style={styles.bottomNavigator}>
               <BottomNav/>
           </View>

       </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        // marginTop:30
    },
    screenHeader:{
        flex:1.5,
        paddingTop:20,
        marginTop:30,
        flexDirection:"row",
        backgroundColor:"rgb(47,42,102)",
        justifyContent:"space-between",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    avatar:{
        height:50,
        width:50,
    },
    headerText:{
        fontSize:24,
        fontWeight:"bold",
        color:"#fff"
    },
    floatCardContainer:{
        // position:"absolute",
        // top:120,
        // bottom:40,
        // left:20,
        // right:20,
        // width:"80%",
        // height:"20%",
        marginTop:-40,
        flex:1.5,
        backgroundColor:"#ccccff",
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:20,
        borderRadius:10,
        justifyContent:"space-between"
    },
    viewButton:{
        backgroundColor:"rgb(219,110,66)",
        width:80,
        height:40,
        borderRadius:18,
        justifyContent:"center",
        alignItems:"center"
    },
    articlesContainer:{
        flex:2,
        marginTop:20,
        // backgroundColor:"#e5e5e5"
    },
    moreText:{
        fontWeight:"bold",
        // marginRight:20,
        color:"rgb(219,110,66)"
       
    },
    articleHeaderRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:20,
        
    },
    articlesHeader:{
        fontSize:22,
        fontWeight:"bold",
    },
    transactionContainer:{
        flex:3,
        marginHorizontal:20,
    },
    bottomNavigator:{
        flex:0.9,
        alignItems:"center"
    },
    margin20:{
        marginHorizontal:20,
    },
    subHeader:{ 
        // fontWeight:"bold",
        fontSize:16, 
    },
    dollarSign:{
        fontSize:30,
        fontWeight:"bold",
        color:"rgb(219,110,66)"
    },
    amount:{
        fontSize:38,
        fontWeight:"bold", 
        color:"black"
    },
    viewButtonText:{
        fontSize:16,
        fontWeight:"bold",
        color:"#fff"
    },
    transactionHeaderRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",  
    },
    transactionHeader:{
        fontSize:22,
        fontWeight:"bold",
    }
    

})

export default Home