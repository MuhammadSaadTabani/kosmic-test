import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { textStyles } from '../../styles/text-styles';
import { colors } from '../../assets/colors';
import { fonts } from '../../assets/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { layoutStyles } from '../../styles/layout-styles';
import Button from '../button';
import { toggleInviteModal } from '../../redux/actions/AppAction';

const InviteCollaboratorModal = () => {

    const {modalVisible} = useSelector(state => state.appReducer)

    const dispatch = useDispatch();

    const onCancelPress = () => {
        dispatch(toggleInviteModal())
    }
    const onAddPress = () => {
        dispatch(toggleInviteModal())
    }

    return (
        <Modal isVisible={modalVisible} backdropColor={colors.background} backdropOpacity={0.8}>
            <View style={styles.container}>
                <Text style={[textStyles.h4, {color: colors.white}]}>Invite Collaboraters</Text>
                <Text style={textStyles.text}>Lorem ipsum dolor sit amet consectetur.</Text>
                <View style={{marginVertical: hp('2%')}}>
                    <Text style={[textStyles.text, {color: colors.white}]}>Name or Email</Text>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="email"
                            size={24}
                            color={'gray'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'e.g John , john@gmail.com'}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                </View>
                <Text style={textStyles.text}>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </Text>
                <View style={[layoutStyles.row, {justifyContent: 'space-between', marginVertical: hp('2%'), alignItems: 'center'}]}>
                    <Text 
                        style={textStyles.text}
                        onPress={onCancelPress}
                    >
                        Cancel
                    </Text>
                    <Button
                        color={'#5136FF'}
                        text={'Add Collaborater'}
                        textColor={colors.white}
                        onPress={onAddPress}
                        style={{width: '60%', borderRadius: hp('3%')}}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default InviteCollaboratorModal

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#151515',
        borderRadius: hp('3%'),
        padding: hp('2%')
    },
    inputContainer: {
        borderRadius: hp('3%'),
        backgroundColor: colors.black,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: hp('2%'),
        height: hp('6.5%'),
        marginTop: hp('2%')
    },
    input: {
        flex:1,
        fontSize: hp('2%'),
        color: colors.white,
        fontFamily: fonts.regular,
        marginLeft: hp('1%'),
        height: hp('6.5%'),
        textAlignVertical: 'center'
    }
})