import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import VideoCard from './VideoCard'
import OptionsRow from './OptionsRow'

const EditVideoSection = () => {
  return (
    <View style={styles.container}>
      <VideoCard/>
      <OptionsRow/>
    </View>
  )
}

export default EditVideoSection

const styles = StyleSheet.create({
    container: {
       
    }
})