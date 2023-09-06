import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import VideoCard from './VideoCard'
import OptionsRow from './OptionsRow'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-deck-swiper'

const EditVideoSection = () => {

  const navigation = useNavigation();

  const onVideoCardPress = () => {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <VideoCard
        onPress={onVideoCardPress}
      />
          <OptionsRow/>
    </View>
  )
}

export default EditVideoSection

const styles = StyleSheet.create({
    container: {
    }
})
