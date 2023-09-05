import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Container, Header } from '../../../components'
import { colors } from '../../../assets/colors'
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons'

// import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

var adShown = false;

const Profile = ({navigation}) => {


    const dispatch = useDispatch()

    const {user} = useSelector(state => state.authReducer)
    
    

    const onLogoutPress = () => {
        navigation.navigate('AuthStack', {screen: "Login"})
        // console.log(user)
    }

    const onEditProfilePress = () => {
        navigation.navigate('EditProfile')
    }
    
    return (
        <Container
            style={{backgroundColor: colors.primary}}
            renderHeader={() => 
                <Header
                    backIcon
                    heading={"Profile"}
                    textColor={colors.white}
                    icon1={user?.uid && (() => 
                        <Icon 
                            name="md-cloud-upload-sharp" 
                            size={32}
                            color={colors.white}
                            onPress={onBackupPress}
                        />
                    )}
                />
            }
        >
            
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({
   
})