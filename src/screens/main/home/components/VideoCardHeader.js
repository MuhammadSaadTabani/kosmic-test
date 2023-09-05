import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { layoutStyles } from '../../../../styles/layout-styles'
import { images } from '../../../../assets/images'
import { Avatar } from '../../../../components'
import { heightPercentageToDP, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import Icon from 'react-native-vector-icons/Octicons';
import MoreIcon from 'react-native-vector-icons/MaterialIcons';
import { icons } from '../../../../assets/icons'


const VideoCardHeader = ({onAddPress}) => {


    return (
        <View style={[layoutStyles.row, styles.container]}>
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
            <View style={[layoutStyles.row]}>
                <View style={[styles.iconContainer, {borderWidth: 0, backgroundColor: 'rgba(55, 55, 55, 0.20)'}]}>
                    <Image
                        source={icons.share}
                        style={{height: hp('4%'), width: hp('4%')}}
                    />
                </View>
                <View style={[styles.iconContainer, {borderColor: colors.white}]}>
                    <MoreIcon
                        name={"more-horiz"}
                        size={30}
                        color={colors.white}
                    />
                </View>
            </View>
        </View>
    )
}

export default VideoCardHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    addIcon: {
        marginLeft: hp('-1.25%'), 
        height: hp('5.5%'), 
        width: hp('5.5%'), 
        borderRadius: 100, 
        backgroundColor: colors.gray, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconContainer:{
        padding: hp('0.65%'),
        borderWidth: 0.5, 
        borderRadius: hp('100%'),
        marginLeft: hp('1%'),
        borderColor: 'rgba(55, 55, 55, 0.20);'
    }
})