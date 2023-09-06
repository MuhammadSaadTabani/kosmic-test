import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textStyles } from '../../../../styles/text-styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Status = ({status}) => {
  return (
    <View style={styles.statusContainer}>
        <Text style={[textStyles.text, {color: '#FFC75C'}]}>{status}</Text>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
    statusContainer: {
        backgroundColor: 'rgba(255, 201, 97, 0.30)',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: hp('2.25%'),
        borderRadius: hp('3%')
    },
})