import React from "react"
import { StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function BottomNav(){

    const handleMove=()=>{
        navigation.navigate()
    }
    return(
        <View style={styles.container}>
            <Ionicons style={styles.start} name="home" size={30} color="black" />
            <MaterialCommunityIcons name="newspaper-variant" size={30} color="black" />
            <AntDesign name="pluscircle" size={50} color="rgb(219,110,66)" />
            <Ionicons name="pie-chart-sharp" size={30} color="black" />
            <MaterialIcons style={styles.end}  name="message" size={30} color="black" />
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // marginHorizontal:15,
        borderRadius:20,
        // borderWidth:1,
        // borderColor:"red",
        backgroundColor:"#ccccff",
        // padding:30,
      
    },
    start:{
        marginLeft:20,
    },
    end:{
        marginRight:20,
    }
})

export default BottomNav