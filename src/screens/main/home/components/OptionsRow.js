import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../../../../assets/icons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { layoutStyles } from '../../../../styles/layout-styles'
import { textStyles } from '../../../../styles/text-styles'
import { colors } from '../../../../assets/colors'

const OptionsRow = () => {
    return (
        <View style={styles.container}>
            <View style={[layoutStyles.row, styles.background]}>
                <View style={[styles.iconBG, ]}>
                    <Image
                        source={icons.edit}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>Edit</Text>
            </View>

            <View style={[styles.background, styles.backgroundHiddenCircle]}/>
            <View style={[styles.background, {borderRadius: hp('100%')}]}>
                <View style={styles.addIconBG}>
                    <Image
                        source={icons.add}
                        style={[styles.image, {padding: hp('2.25%')}]} 
                    />
                </View>
            </View>
            <View style={[styles.background, styles.backgroundHiddenCircle]}/>
            <View style={[layoutStyles.row, styles.background]}>
                <View style={styles.iconBG}>
                    <Image
                        source={icons.calendar2}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>Join Meeting</Text>
            </View>
           
        </View>
    )
}

export default OptionsRow

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('3%'),
        width: '100%',
        // overflow: 'hidden'
    },
    background: {
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('1.5%'),
        borderRadius: hp('2%'),
        backgroundColor: 'rgba(41, 41, 41, 0.80)'
    },
    iconBG: {
        // height: hp('1%'),
        // width: hp('1%'),
        padding: hp('0.75%'),
        backgroundColor: '#161616CC',
        borderRadius: hp('100%'),
    },
    image: {
        height: hp('3.25%'),
        width: hp('3.25%'),
        // padding: hp('3%'),
       
    },
    text: {
        marginLeft: hp('0.8%'),
        color: colors.white
    },
    addIconBG: {
        backgroundColor: colors.primary,
        padding: hp('1.5%'),
        borderRadius: hp('100%')
    },
    backgroundHiddenCircle: {
        flex:1,
        height: hp('5%'),
        // width: '100%',
        borderRadius: hp('80%'),
        marginLeft: hp('-3.5%'),
        marginRight: hp('-3.5%'),
        zIndex:-1
    }
})