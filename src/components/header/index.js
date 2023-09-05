import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { 
   View, 
   Text,
   StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { colors } from '../../assets/colors';
import Heading from '../heading';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Avatar from '../avatar';
import { layoutStyles } from '../../styles/layout-styles';
import { useSelector } from 'react-redux';
import { images } from '../../assets/images';


const Header = ({backIcon, textColor, onAddPress, notificationLength}) => {


    const navigation = useNavigation();

    const {user} = useSelector(state => state.authReducer)

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAvatarPress = () => {
        navigation.navigate('ProfileStack', {screen: 'ProfileScreen'});
    }

    return (
        <View style={styles.header}>
            <View style={layoutStyles.row}>
                <Avatar
                    source={images.user1}
                    size={hp('5.5%')}
                />
                <Avatar
                    source={images.user2}
                    size={hp('5.5%')}
                    imageStyle={{marginLeft: hp('-1.25%')}} //, borderWidth: 2, borderColor: 'red'
                />
                <View style={{height: hp('5.5%'), width: hp('5.5%'), borderRadius: 100, backgroundColor: colors.gray, justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                    name='plus'
                    size={25}
                    color={colors.white}
                    onPress={onAddPress}
                    
                />
                </View>
            </View>
            <View style={[layoutStyles.row]}>
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
                />
              
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
        // borderRadius: 1000, 
        // padding: 0,
        // fontSize: hp('2%'),
        
    }
})
export default Header;