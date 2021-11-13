import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Heart, Home, Reels, Search } from '../components/svgComponents';
import HomeScreen from '../screens/HomeScreen';


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingsScreen</Text>
    </View>
  );
}

function ReelsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ReelsScreen</Text>
      </View>
    );
  }

function ActivityScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ActivityScreen</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return <Home color={focused ? "red" : "#fff"} size={24}/>;
          } else if (route.name === 'Search') {
            return <Search color={focused ? "red" : "#fff"} size={24}/>;
          } else if (route.name === 'Reels') {
            return <Reels color={focused ? "red" : "#fff"} size={24}/>;
          } else if (route.name === 'Activity') {
            return <Heart color={focused ? "red" : "#fff"} size={24}/>;
          } else {
            return <Image 
              style={{height:25, width:25, borderRadius:50}}
              source={{
                uri:"https://media-exp1.licdn.com/dms/image/C5603AQEjntnx2F_XsQ/profile-displayphoto-shrink_800_800/0/1597775170156?e=1642032000&v=beta&t=4lx4hwTubuFF5ErHCnaMzFiN2oPfHlH7NDiAnz3kslE"
              }}
          />;
          }

        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth:2,

        },
    })

  return (
    <Tab.Navigator defaultScreenOptions={{headerBackground:"red", headerTitle:"nice"}} screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SettingsScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}