import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { 
   View, 
   Text,
   StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../assets/colors';
import Heading from '../heading';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Avatar from '../avatar';
import { layoutStyles } from '../../styles/layout-styles';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images';
import { toggleInviteModal } from '../../redux/actions/AppAction';
import { textStyles } from '../../styles/text-styles';


const Header = ({backIcon, heading, textColor, notificationLength, hideCollaborators, style, hideProfile}) => {


    const navigation = useNavigation();
    const dispatch = useDispatch();


    const {user} = useSelector(state => state.authReducer)

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAvatarPress = () => {
        navigation.navigate('ProfileStack', {screen: 'ProfileScreen'});
    }
    const onAddPress = () => {
        dispatch(toggleInviteModal())
    }

    return (
        <View style={[styles.header, style]}>
            <View style={layoutStyles.row}>
                {backIcon &&
                    <View style={[styles.customIcon, {marginRight: hp('1%')}]}>
                        <BackIcon 
                            name='arrow-back'
                            size={28}
                            color={colors.white}
                            onPress={onBackPress}
                        />
                    </View>
                }
                {heading &&
                    <Text style={[textStyles.h2, {color: colors.white}]}>{heading}</Text>
                }
                {!hideCollaborators &&
                    <>
                        <Avatar
                            source={images.user1}
                            size={hp('5.5%')}
                        />
                        <Avatar
                            source={images.user2}
                            size={hp('5.5%')}
                            imageStyle={{marginLeft: hp('-1.25%')}} //, borderWidth: 2, borderColor: 'red'
                        />
                        <View style={styles.customIcon}>
                            <Icon 
                                name='plus'
                                size={25}
                                color={colors.white}
                                onPress={onAddPress}
                                
                            />
                        </View>
                    </>
                }
                
            </View>
            <View style={[layoutStyles.row]}>
                {!hideProfile &&
                    <>
                        <View style={{marginRight: hp('2%')}}>
                            <Icon
                                name="bell"
                                size={25}
                                color={colors.white}
                            />
                        <View style={styles.notificationBadge}>

                            <Text style={styles.badgeText}>{notificationLength || 0 }</Text>
                            </View>
                        </View>
                        <Avatar
                            source={images.profileImage}
                            size={hp('5.5%')}
                            onPress={onAvatarPress}
                        />
                    </>
                }
                
              
            </View>
           
        </View>
    );
}
 
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: hp('2%'),
        justifyContent: 'space-between',
    },
    notificationBadge: {
        height: 20, 
        width: 20, 
        borderRadius: 20, 
        backgroundColor: colors.secondary, 
        justifyContent: 'center', 
        alignItems: 'center',

        position: 'absolute',
        top: -10,
        right: -5
    },
    badgeText: {
        color: colors.white,
    },
    customIcon: {
        height: hp('5.5%'),
        width: hp('5.5%'), 
        borderRadius: 100, 
        backgroundColor: colors.gray, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
export default Header;