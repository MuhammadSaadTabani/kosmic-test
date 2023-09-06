import { Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Container, Header, IconInput } from '../../../components'
import { colors } from '../../../assets/colors'
import { useDispatch, useSelector } from 'react-redux'

import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { launchImageLibrary } from 'react-native-image-picker'
import { formValidation, showToast } from '../../../utils'
import { textStyles } from '../../../styles/text-styles'
import { updateUserData } from '../../../redux/actions/AuthAction'


const Profile = ({navigation}) => {

    let emailRef, phoneRef  = null;

    const {user} = useSelector(state => state.authReducer)

    const dispatch = useDispatch();


    const [state, setState] = useState({
        name: user.name,
        phone: user.phone,
        email: user.email,
        photo: user.photo
    });


    



    
    const handleChange = (type, value) => {
        setState({
            ...state,
            [type]: value
        })
    }
    const selectImage = () => {
        launchImageLibrary({
            mediaType: "photo", 
            selectionLimit: 1, 
            quality: 0.4,
        }).then(img => {
            if(!img.didCancel){
                console.log(img.assets[0].uri)
                handleChange('photo', img.assets[0].uri)
            }
        }).catch(err => {
            console.log(err);
            showToast("Couldn't Select Image")
        })
    }
    const onEditProfilePress = async () => {
        // alert(user.uid)
        // return alert(auth().currentUser.uid)
        if(!formValidation(state)){
            return showToast("Enter All Fields")
        }
        dispatch(updateUserData(state))
        showToast("Profile Updated Successfully")
        // const success = await dispatch(editProfile(state))
    }

    const onCancelPress = () => {
        navigation.goBack()
    }
    
    return (
        <Container
            style={{backgroundColor: colors.primary}}
            renderHeader={()=>
                <Header
                    hideProfile
                    hideCollaborators
                    backIcon
                />
            }
        >
            <Avatar
                edit 
                onPress={selectImage}
                size={hp('25%')}
                source={state?.photo && {uri: state.photo}}
            />

            <IconInput
                style={{width:'100%', backgroundColor: 'white', marginTop: hp('3%')}}
                inputStyle={{color: colors.black}}
                icon="person"
                placeholder="Enter your Full Name"
                value={state.name}
                onChange={(text)=>handleChange('name', text)}
                iconColor={colors.primary}
                onSubmitPress={() => emailRef.focus()}
                blur={false}
            />
            <IconInput
                inputRef={ref => emailRef = ref}
                style={{width:'100%', backgroundColor: 'white'}}
                inputStyle={{color: colors.black}}
                icon="mail"
                placeholder="Enter your Email Address"
                value={state.email}
                onChange={(text)=>handleChange('email', text)}
                iconColor={colors.primary}
                onSubmitPress={() => phoneRef.focus()}
                blur={false}
                keyboard={"email-address"}
            />
            <IconInput
                inputRef={ref => phoneRef = ref}
                style={{width:'100%', backgroundColor: 'white'}}
                inputStyle={{color: colors.black}}
                icon="phone-portrait"
                placeholder="Enter your Contact Number"
                value={state.phone}
                onChange={(text)=>handleChange('phone', text)}
                iconColor={colors.primary}
                keyboard={"numeric"}
            />
            <Button
                color={colors.white}
                text={"Save Changes"}
                textColor={colors.primary}
                style={{justifyContent: 'center', marginTop: hp('3%')}}
                onPress={onEditProfilePress}
            />

            
            <Text
                onPress={onCancelPress}
                style={[
                    textStyles.h6,
                    styles.text
                ]}
            >
                Back
            </Text>
            
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({
    text: {
        color: 'white', 
        alignSelf: 'center', 
        marginTop: hp('4%')
    }
})