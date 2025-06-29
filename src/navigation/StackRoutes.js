import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabRoutes from './BottomTabRoutes';
import HomeScreen from '../screens/Home/HomeScreen';
import MyKitScreen from '../screens/MyKit/MyKitScreen';
import VideoLibraryScreen from '../screens/Videos/VideoLibraryScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import QuestionScreen from '../screens/GeneralQueries/QuestionScreen';
import AllProductScreen from '../screens/AllProducts/AllProductScreen';
import TermsPolicieScreen from '../screens/TermsPolicies/TermsPolicieScreen';
import ReadMoreScreen from '../screens/ReadMore/ReadMoreScreen';


const Stack = createStackNavigator();

export function HomeStack({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function MyKitStack() {
    return (
        <Stack.Navigator initialRouteName='MyKitScreen'>
            <Stack.Screen name="MyKitScreen" component={MyKitScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


export function VideoStack() {
    return (
        <Stack.Navigator initialRouteName='VideoLibraryScreen'>
            <Stack.Screen name="VideoLibraryScreen" component={VideoLibraryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function GeneralQueriesStack() {
    return (
        <Stack.Navigator initialRouteName='QuestionScreen'>
            <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function AllProductStack() {
    return (
        <Stack.Navigator initialRouteName='AllProductScreen'>
            <Stack.Screen name="AllProductScreen" component={AllProductScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function TermsPolicieStack() {
    return (
        <Stack.Navigator initialRouteName='TermsPolicieScreen'>
            <Stack.Screen name="TermsPolicieScreen" component={TermsPolicieScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function ReadMoreStack() {
    return (
        <Stack.Navigator initialRouteName='ReadMoreScreen'>
            <Stack.Screen name="ReadMoreScreen" component={ReadMoreScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const StackRoutes = () => {
    const [initialRoute, setInitialRoute] = useState('BottomTabRoutes');

    const routeArray = [
        {
            name: "BottomTabRoutes",
            component: BottomTabRoutes,
            options: { headerShown: false },
        },

        {
            name: "HomeStack",
            component: HomeStack,
            options: { headerShown: false },
        },

        {
            name: "MyKitStack",
            component: MyKitStack,
            options: { headerShown: false },
        },
    
        {
            name: "GeneralQueriesStack",
            component: GeneralQueriesStack,
            options: { headerShown: false },
        },

        {
            name: "AllProductStack",
            component: AllProductStack,
            options: { headerShown: false },
        },
        {
            name: "TermsPolicieStack",
            component: TermsPolicieStack,
            options: { headerShown: false },
        },
        {
            name: "ReadMoreStack",
            component: ReadMoreStack,
            options: { headerShown: false },
        },
    ]
    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2157AD" },
                headerTitle: null,
            }}
        >
            {routeArray.map((route) => (
                <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                />
            ))}
        </Stack.Navigator>
    )
}

export default StackRoutes

const styles = StyleSheet.create({})