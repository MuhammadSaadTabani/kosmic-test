import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { layoutStyles } from '../../../../styles/layout-styles'
import { images } from '../../../../assets/images'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import { Avatar } from '../../../../components'
import Icon from 'react-native-vector-icons/Octicons';
import { toggleInviteModal } from '../../../../redux/actions/AppAction'
import { useDispatch } from 'react-redux'


const Collaborators = () => {

    const dispatch = useDispatch()

    const onAddPress = () => {
        dispatch(toggleInviteModal())
    }
    return (
        <View style={[layoutStyles.row]}>
            <Avatar
                source={images.user1}
                size={hp('5.5%')}
            />
            <Avatar
                source={images.user2}
                size={hp('5.5%')}
                style={{marginLeft: hp('-1.25%')}} //, borderWidth: 2, borderColor: 'red'
            />
            <Avatar
                source={images.user2}
                size={hp('5.5%')}
                style={{marginLeft: hp('-1.25%')}} //, borderWidth: 2, borderColor: 'red'
            />
            <View style={styles.addIcon}>
                <Icon 
                    name='plus'
                    size={25}
                    color={colors.white}
                    onPress={onAddPress}
                />
            </View>
        </View>
    )
}

export default Collaborators

const styles = StyleSheet.create({
    addIcon: {
        marginLeft: hp('-1.25%'), 
        height: hp('5.5%'), 
        width: hp('5.5%'), 
        borderRadius: 100, 
        backgroundColor: colors.gray, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
})