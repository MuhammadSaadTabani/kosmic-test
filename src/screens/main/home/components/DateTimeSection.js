import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import { layoutStyles } from '../../../../styles/layout-styles'
import { textStyles } from '../../../../styles/text-styles'
import { fonts } from '../../../../assets/fonts'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import GradientText from '../../../../components/gradient-text'

const DateTimeSection = ({time, day}) => {
    return (
        <View style={styles.container}>
            <GradientText
                text={"Your recent videos"}
                style={{fontSize: hp('2.5%'), fontFamily: fonts.regular}}
            />
            <View style={[ layoutStyles.row , {justifyContent: 'space-between', alignItems: 'center', marginTop: hp('2%')}]}>
                <View>
                    <Text style={[styles.time]}>{time}</Text>
                    <Text style={styles.day}>{day}</Text>
                </View>
                <View style={styles.icon}>
                    <Icon
                        name="search"
                        size={30}
                        color={colors.white}
                    />
                </View>
            </View>
            
        </View>
    )
}

export default DateTimeSection

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
    },
    text: {
        color: 'red',
        fontFamily: fonts.medium,
        fontSize: hp('2.2%'),
        // letterSpacing: 1
    },
    time: {
        color: colors.white,
        fontFamily: fonts.semiBold,
        fontSize: hp('7.25%'),
        letterSpacing: 1,
        lineHeight:70,

    },
    day: {
        color: '#BB62A0',
        fontFamily: fonts.semiBold,
        fontSize: hp('6.25%'),
        letterSpacing: 1,
        lineHeight:60,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1B1B1B',
        // padding: hp('2.5%'),
        height: hp('9.25%'),
        width: hp('9.25%'),
        borderRadius: hp('100%'),
    }
})