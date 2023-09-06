import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, View, Text, Platform } from 'react-native';
import Home from '../screens/main/home';
import Profile from '../screens/main/profile';
import EditProfile from '../screens/main/edit-profile';
import Details from '../screens/main/video-details';
import { colors } from '../assets/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBarIcon from '../components/bottom-icon';
import { icons } from '../assets/icons';
import Collaborators from '../screens/main/collaborators';
import SearchScreen from '../screens/main/search';
import Settings from '../screens/main/settings';
import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const BottomTabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: colors.bottomBar,
                    height: heightPercentageToDP('10%'),
                    justifyContent: 'space-evenly',
                    margin: heightPercentageToDP('1.5%'),
                    borderRadius: heightPercentageToDP('2%'),
                    position: 'absolute',
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <BottomBarIcon
                            active={focused}
                            source={icons.home}
                        />
                           
                    )
                }}
            />
            <Tab.Screen
                name='SearchStack'
                component={SearchStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused 
                            ?
                            <BottomBarIcon
                                active
                                source={icons.search}
                            />
                            :
                            <BottomBarIcon
                                source={icons.search}
                            />
                    )
                }}
            />
            <Tab.Screen
                name='Folder'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused 
                            ?
                            <BottomBarIcon
                                active
                                source={icons.folder}
                            />
                            :
                            <BottomBarIcon
                                source={icons.folder}
                            />
                    )
                }}
            />
            <Tab.Screen
                name='Collaborators'
                component={CollaboratorStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused 
                            ?
                            <BottomBarIcon
                                active
                                source={icons.profileActive}
                            />
                            :
                            <BottomBarIcon
                                source={icons.profile}
                            />
                    )
                }}
            />
            <Tab.Screen
                name='Settings'
                component={SettingsStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused 
                            ?
                            <BottomBarIcon
                                active
                                source={icons.setting}
                            />
                            :
                            <BottomBarIcon
                                source={icons.setting}
                            />
                    )
                }}
            />
        </Tab.Navigator>
    )
}



const HomeStack = () => {
    return(
        <Stack.Navigator 
            // initialRouteName='Details'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name='HomeScreen' 
                component={Home}
            />
          
            
        </Stack.Navigator>
    )
}
const SettingsStack = () => {
    return(
        <Stack.Navigator 
            // initialRouteName='Details'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name='SettingsScreen' 
                component={Settings}
            />
          
            
        </Stack.Navigator>
    )
}

const CollaboratorStack = () => {
    return(
    <>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name='CollaboratorScreen' 
                component={Collaborators}
            />
        </Stack.Navigator>
    </>
    )
}
const SearchStack = () => {
    return(
    <>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name='Search' 
                component={SearchScreen}
            />
        </Stack.Navigator>
    </>
    )
}
const ProfileStack = () => {
    return(
    <>
        <StatusBar backgroundColor="transparent" barStyle={"light-content"}/>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                animation: "simple_push"
            }}
        >
            <Stack.Screen 
                name='ProfileScreen' 
                component={Profile}
            />
            <Stack.Screen 
                name='EditProfile' 
                component={EditProfile}
            />
    
        </Stack.Navigator>
    </>
    )
}


const MainRoutes = () => {


    return(
        <Stack.Navigator 
            // initialRouteName='HomeStack'
            screenOptions={{
                headerShown:false,
                // headerStyle: {backgroundColor: colors.primary},
                // headerTintColor: colors.white,
                // title: "Home"
            }}
        >
            {/* <Stack.Screen name='BottomTab' component={BottomTab} /> */}
            
            <Stack.Screen name='BottomTabStack' component={BottomTabStack} />
            <Stack.Screen name='Details' component={Details} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name='HomeStack' component={HomeStack} />
            <Stack.Screen
                name='ProfileStack' 
                component={ProfileStack} 
                // options={anima}
                options={{
                    animation: 'slide_from_right'
                }}
            />
        </Stack.Navigator>
    )
}


export default MainRoutes;

