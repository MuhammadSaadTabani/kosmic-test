import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../assets/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { textStyles } from '../../../../styles/text-styles'

const GraphFilter = ({onPress, filterText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={[textStyles.h6, {color: colors.white}]}>{filterText}</Text>
        <Icon name="arrow-down" size={16} color={colors.white} style={{marginLeft: hp('1%')}}/>
    </TouchableOpacity>
  )
}

export default GraphFilter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: hp('3%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
    }
})