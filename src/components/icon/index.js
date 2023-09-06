import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../assets/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const MoreIcon = ({style}) => (
    <View style={[styles.iconContainer, {borderColor: colors.white}, style]}>
        <Icon
            name={"more-horiz"}
            size={30}
            color={colors.white}
        />
    </View>
)

const styles = StyleSheet.create({
    iconContainer:{
        height: hp('5%'),
        width: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5, 
        borderRadius: hp('100%'),
        marginLeft: hp('1%'),
        borderColor: 'rgba(55, 55, 55, 0.20);'
    }
})