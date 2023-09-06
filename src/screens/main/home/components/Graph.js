import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { graphData } from '../../../../constants'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { textStyles } from '../../../../styles/text-styles'
import LinearGradient from 'react-native-linear-gradient'

const Graph = ({style, extended}) => {
    const extendedWidth = extended ? hp('5%'): hp('4%')
    return (
        <View style={[styles.container, style]}>
            {graphData.map(item => 
                <View key={item.id} style={styles.col}>
                    <View style={[styles.bar, {width: extendedWidth, marginRight: hp('1%'),}]}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#725DFF', '#B265FF']} style={[ styles.bar, {width: extendedWidth, height: hp((item.value/3).toString())},]}>
                            <View style={[ styles.bar, {height: hp((item.value/3).toString()), width: extendedWidth, backgroundColor: 'transparent',}]}/>
                        </LinearGradient>
                    </View>
                    <Text style={[textStyles.text, {marginTop: hp('1%')}]}>{item.name}</Text>
                </View>
            )}
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: hp('2%'), 
        // width: '0%',
        justifyContent: 'center',
    },
    col: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    bar: {
        height: hp(15),
        width: hp('4%'),
        borderRadius: hp('2%'),
        backgroundColor: '#6441BF',
        justifyContent: 'flex-end',
    }
})