// import {NavigationContainer} from '@react-navigation/native'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Article from "./src/screens/Article";
import BalanceDetails from "./src/screens/BalanceDetails";
import Home from "./src/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./src/screens/ArticleList";


// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Article"
//           component={Article}
//           // options={{
//           //   headerShown: false,
//           // }}
//         />
//         <Stack.Screen
//           name="Balance"
//           component={BalanceDetails}
//           // options={{
//           //   headerShown:false,
//           // }}
//         />
//         <Stack.Screen
//           name="ArticleList"
//           component={ArticleList}
//           // options={{
//           //   headerShown:false,
//           // }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./src/components/BottomNav";
import SearchIcon from "./src/components/SearchIcon";

const Tab = createBottomTabNavigator();

const Stack=createStackNavigator()
function Articles(){
  return(
    <Stack.Navigator
    initialRouteName="ArticleList"
    // screenOptions={{headerShown:false}}
    >
      <Stack.Screen
        name="ArticleList"
        component={ArticleList}
        options={{
            headerTitle: "Articles",
            headerStyle: { backgroundColor: "#ccccff" },
            headerRight: () => {
              return (<SearchIcon/>)
          }
          }}
        
      />
      <Stack.Screen
        name="Article"
        component={Article}
      />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => {
          return <BottomNav />;
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: " " }}
        />
        <Tab.Screen name="Balance" component={BalanceDetails} />
        <Tab.Screen
          name="ArticleList"
          component={Articles}
          options={
            {
              headerShown:false
            }
          }
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
