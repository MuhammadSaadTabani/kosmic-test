import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from '../screens/main/home';
import Profile from '../screens/main/profile';
import EditProfile from '../screens/main/edit-profile';
import Details from '../screens/main/video-details';



// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const BottomTab = () => {
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeRoutes} />
//             <Tab.Screen name="Profile" component={ProfileRoutes} />
//             <Tab.Screen name="Settings" component={SettingRoutes} />
//         </Tab.Navigator>
//     )
// }


const HomeRoutes = () => {
    return(
        <Stack.Navigator 
            // initialRouteName='Details'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name='HomeScreen' 
                component={Home}
            />
          
            <Stack.Screen 
                name='Details' 
                component={Details}
                // initialParams={{type: 'Expense'}}
            />
        </Stack.Navigator>
    )
}

const ProfileRoutes = () => {
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
            initialRouteName='HomeStack'
            screenOptions={{
                headerShown:false,
                // headerStyle: {backgroundColor: colors.primary},
                // headerTintColor: colors.white,
                // title: "Home"
            }}
        >
            {/* <Stack.Screen name='BottomTab' component={BottomTab} /> */}
            
            <Stack.Screen name='HomeStack' component={HomeRoutes} />
            <Stack.Screen
                name='ProfileStack' 
                component={ProfileRoutes} 
                options={{
                    animation: 'slide_from_right'
                }}
            />
        </Stack.Navigator>
    )
}


export default MainRoutes;