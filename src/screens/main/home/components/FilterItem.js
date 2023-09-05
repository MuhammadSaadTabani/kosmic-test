import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { textStyles } from '../../../../styles/text-styles'
import { colors } from '../../../../assets/colors'

const FilterItem = ({text, length, selected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, selected && {backgroundColor: colors.primary}]}>
      <Text style={[textStyles.h6, styles.text]}>{text}</Text>
      <View style={[styles.len, selected && {backgroundColor: '#8150FF'}]}><Text style={[styles.text]}>{length}</Text></View>
    </TouchableOpacity>
  )
}

export default FilterItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: hp('2%'),
        borderColor: colors.gray,
        marginRight: hp('1%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('2%'),
        flexDirection: 'row',
    },
    text: {
        color: colors.white
    },
    len: {
        backgroundColor: colors.gray,
        paddingHorizontal: hp('1%'),
        paddingVertical: hp('0.5%'),
        marginLeft: hp('1%'),
        borderRadius: hp('1%'),
    }
})