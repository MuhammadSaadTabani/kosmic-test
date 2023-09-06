import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MoreIcon } from '../../../../components/icon'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { images } from '../../../../assets/images'
import { Avatar } from '../../../../components'
import { textStyles } from '../../../../styles/text-styles'
import { colors } from '../../../../assets/colors'

const CollaboratorRow = ({image, name, email}) => {
  return (
    <View style={[styles.row, styles.container]}>
        <View style={styles.row}>
            <Avatar
                source={image}
                size={hp('6%')}
            />
            <View style={{marginLeft: hp('2%')}}>
                <Text style={[textStyles.h5, {color: colors.white}]}>{name}</Text>
                <Text style={{color: colors.white, fontSize: hp('1.75%')}}>{email}</Text>
            </View>
        </View>
        <MoreIcon
            style={{backgroundColor: '#CDCDCD33', borderWidth: 0}}
        />
    </View>
  )
}

export default CollaboratorRow

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        padding: hp('1%'),
        height: hp('12%'),
        borderBottomWidth:1,
        borderBottomColor: '#CDCDCD33',
        backgroundColor: colors.background
    },

})