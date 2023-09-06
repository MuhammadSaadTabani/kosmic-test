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
import Graph from './Graph'
import Icon from 'react-native-vector-icons/AntDesign'
import Status from './Status'

const VideoCard = ({onPress}) => {

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
            <View style={{flexDirection: 'row'}}>
                <Graph/>
                <View style={styles.arrow}> 
                <Icon 
                    name={"arrowright"} 
                    size={28} 
                    color={'black'} 
                    onPress={onPress}
                />
                </View>
            </View>
            {/* <View style={{flexDirection: 'row', marginVertical: hp('2%'), width: '100%',justifyContent: 'center'}}>
                {graphData.map(item => 
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{height: hp(20), width: hp('5%'), borderRadius: hp('2%'), backgroundColor: '#6441BF', justifyContent: 'flex-end', marginRight: hp('1%')}}>
                            <View style={{height: hp((item.value/3).toString()), width: hp('5%'), borderWidth: 1, borderRadius: hp('2%'), backgroundColor: 'lightblue',}}/>
                        </View>
                        <Text style={[textStyles.text, {marginTop: hp('1%')}]}>{item.name}</Text>
                    </View>
                )}
            </View> */}
            

            <View style={[layoutStyles.row, {justifyContent: 'space-between'}]}>
                <View style={[layoutStyles.row, {flex:2, justifyContent: 'flex-start'}]}>
                    <View style={styles.iconBackground}>
                        <Image
                            source={icons.message}
                            style={styles.icon}
                        />
                        <Text style={[[textStyles.text, {color: colors.white, marginLeft: hp('0.8%')}]]}>2</Text>
                    </View>
                    
                    <DatePicker
                        onChange={onDateChange}
                        style={{marginLeft: hp('2%')}}
                    />
                </View>
                <Status
                    status={"Pending"}
                />
            </View>
        </View>
  )
}

export default VideoCard

const styles = StyleSheet.create({
    container: {
        borderRadius: hp('2%'),
        padding: hp('2%'),
        backgroundColor: colors.primary,
        width: '100%'
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
    arrow: {
        transform: [{ rotate: '320deg'}],
        padding: hp('2%'),
        backgroundColor: colors.white,
        borderRadius: 100,
        position: 'absolute',
        right: -8,
        top: 20
    }
})