import React from "react"
import { StyleSheet,Text,View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ArticleCard from "../components/ArticleCard"

function ArticleList(){

    const articles=[
        {id:23, title:"80/20 Principle", author:"Kwame Pianim"},
        {id:53, title:"Intro to Investing", author:"Kwame Pianim"},
        {id:33, title:"Understanding Bitcoin", author:"Dame Ruff"},
        {id:63, title:"Understanding Stock Markets", author:"Kwame Addei"},
        {id:73, title:"Intro to Budgeting", author:"Elsie Brooker"},
        {id:13, title:"Financing Higher Education", author:"The Economist"},
        {id:14, title:"Growth Mindset", author:"Money Matters"}
    ]
    return(
        <View style={styles.container}>

            <FlatList
                data={articles}
                renderItem={
                    ({item})=>{
                        return <ArticleCard title={item.title} author={item.author}/>
                    }
                }
                keyExtractor={(item)=>{
                    item.id
                }}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        marginHorizontal:20,
    },

})

export default ArticleList