import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const GradientText = ({text, style}) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient
        colors={[ '#F2AC8A' , '#8386FF', '#9B74FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[style, {opacity: 0,}]} >{text}</Text>
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText

const styles = StyleSheet.create({})