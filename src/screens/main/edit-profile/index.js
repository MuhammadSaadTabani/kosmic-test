import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    Avatar,
    Button,
    Container, 
    Header, 
    IconInput,
} from '../../../components';
import { colors } from '../../../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { textStyles } from '../../../styles/text-styles';
import {launchImageLibrary} from 'react-native-image-picker';
import { formValidation, showToast } from '../../../utils';
import { editProfile } from '../../../redux/actions/AuthAction';


const EditProfile = ({navigation}) => {


    let emailRef, phoneRef  = null;

    const dispatch = useDispatch();

    const {user} = useSelector(state => state.authReducer)
    const {editProfileLoading} = useSelector(state => state.authReducer)

    const [state, setState] = useState({
        uid: user.uid,
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
    const onImagePress = () => {
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
        // const success = await dispatch(editProfile(state))
        // if(success){
        //     navigation.goBack();
        // }
    }

    const onCancelPress = () => {
        navigation.goBack()
    }

    return(
        <Container
            style={{backgroundColor: colors.primary}}
            renderHeader={() => 
                <Header
                    backIcon
                    heading={"Edit Profile"}
                    textColor={colors.white}
                />
            }
        >
            <Avatar
                edit
                source={state.photo && {uri: state.photo}}
                onPress={onImagePress}
            />
            <IconInput
                style={{width:'100%', backgroundColor: 'white', marginTop: hp('3%')}}
                inputStyle={{color: colors.primary}}
                icon="person"
                placeholder="Enter your Full Name"
                value={state.name}
                onChange={(text)=>handleChange('name', text)}
                iconColor={colors.primary}
                onSubmitPress={() => emailRef.focus()}
                blur={false}
            />
            <IconInput
                disabled
                inputRef={ref => emailRef = ref}
                style={{width:'100%', backgroundColor: 'white'}}
                inputStyle={{color: colors.primary}}
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
                inputStyle={{color: colors.primary}}
                icon="phone-portrait"
                placeholder="Enter your Contact Number"
                value={state.phone}
                onChange={(text)=>handleChange('phone', text)}
                iconColor={colors.primary}
                onSubmitPress={() => passwordRef.focus()}
                blur={false}
                keyboard={"numeric"}
            />
            <Button
                color={colors.white}
                loading={editProfileLoading}
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
                Cancel
            </Text>
        </Container>
    )
}
export default EditProfile;

const styles = StyleSheet.create({
    text: {
        color: 'white', 
        alignSelf: 'center', 
        marginTop: hp('4%')
    }
})