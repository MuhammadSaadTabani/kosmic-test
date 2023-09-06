import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { layoutStyles } from '../../../../styles/layout-styles'
import { images } from '../../../../assets/images'
import { Avatar } from '../../../../components'
import { heightPercentageToDP, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import { icons } from '../../../../assets/icons'
import Collaborators from './Collaborators'
import { MoreIcon } from '../../../../components/icon'


const VideoCardHeader = ({onAddPress}) => {


    return (
        <View style={[layoutStyles.row, styles.container]}>
            <Collaborators/>
            <View style={[layoutStyles.row]}>
                <View style={[styles.iconContainer, {borderWidth: 0, backgroundColor: 'rgba(55, 55, 55, 0.20)'}]}>
                    <Image
                        source={icons.share}
                        style={{height: hp('4%'), width: hp('4%')}}
                    />
                </View>
                <MoreIcon/>
            </View>
        </View>
    )
}

export default VideoCardHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
})