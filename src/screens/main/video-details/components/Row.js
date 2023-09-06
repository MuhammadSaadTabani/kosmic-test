import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textStyles } from '../../../../styles/text-styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Row = ({heading, headingStyle, rightSideComponent, style, }) => {
  return (
    <View style={[styles.container, style]}>
        <Text style={[textStyles.h6, {color: 'white'}, headingStyle]}>{heading}</Text>
        {rightSideComponent()}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp('1%')
    }
})