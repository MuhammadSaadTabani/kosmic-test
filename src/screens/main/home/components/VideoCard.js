import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoCardHeader from './VideoCardHeader'
import { layoutStyles } from '../../../../styles/layout-styles'
import { images } from '../../../../assets/images'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { fonts } from '../../../../assets/fonts'
import { colors } from '../../../../assets/colors'
import { icons } from '../../../../assets/icons'
import { textStyles } from '../../../../styles/text-styles'
import DatePicker from './DatePicker'

const VideoCard = () => {

    const onDateChange = (date) => {

    }
    return (
        <View style={styles.container}>
            <VideoCardHeader/>
            <View style={[layoutStyles.row, styles.row]}>
                <Image
                    source={images.videoCardProfile}
                    style={styles.image}
                />
                <View style={styles.col}>
                    <Text style={styles.text}>Ads video editor</Text>
                    <Text style={styles.name}>First Project</Text>
                </View>
            </View>


            <View style={[layoutStyles.row, {justifyContent: 'space-between'}]}>
                <View style={[layoutStyles.row, {flex:2, justifyContent: 'flex-start'}]}>
                    <View style={styles.iconBackground}>
                        <Image
                            source={icons.message}
                            style={styles.icon}
                        />
                        <Text style={[[textStyles.text, {color: colors.white, marginLeft: hp('0.8%')}]]}>2</Text>
                    </View>
                    <View style={[styles.iconBackground, {marginLeft: hp('2%')}]}>
                        <Image
                            source={icons.calendar2}
                            style={styles.icon}
                        />
                        <DatePicker
                            heading={"asd"}
                            onChange={onDateChange}
                        />
                    </View>
                </View>
                <View style={styles.statusContainer}>
                    <Text style={[textStyles.text, {color: '#FFC75C'}]}>Pending</Text>
                </View>
            </View>
        </View>
  )
}

export default VideoCard

const styles = StyleSheet.create({
    container: {
        borderRadius: hp('2%'),
        padding: hp('2%'),
        backgroundColor: colors.primary
    },
    row: {
        justifyContent: 'flex-start',
        marginVertical: hp('4%')
    },
    col: {
        marginLeft: hp('1.5%')
    },
    image: {
        height: hp('8%'),
        width: hp('8%'),
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: hp('1.65%'),
        color: colors.white
    },
    name: {
        fontFamily: fonts.medium,
        fontSize: hp('2.5%'),
        color: colors.white
    },
    iconBackground: {
        padding: hp('1%'),
        borderRadius: hp('1%'),
        backgroundColor: '#6546B5',
        flexDirection: 'row',
    },
    icon: {
        height: hp('2.5%'),
        width: hp('2.5%'),
    },
    statusContainer: {
        backgroundColor: 'rgba(255, 201, 97, 0.30)',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: hp('2.25%'),
        borderRadius: hp('3%')
    }
})