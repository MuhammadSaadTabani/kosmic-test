import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors';
import { fonts } from '../../assets/fonts';
import { textStyles } from '../../styles/text-styles';
import Icon from 'react-native-vector-icons/Ionicons'

const Button = ({disabled, onPress, color, text, textColor, icon, iconColor, style, loading}) => {

    return(
        <TouchableOpacity 
            disabled={loading || disabled}
            activeOpacity={0.6}
            onPress={onPress}
            style={[
                styles.button,
                color && {backgroundColor:color},
                style
            ]}
        >
            {loading 
                ?
                    <ActivityIndicator color={textColor || colors.white} size="small" style={{alignSelf: 'center', flex:1}} />
                :
                    <>
                    {icon &&
                        <Icon name={icon} color={iconColor} size={hp('5%')} style={{marginRight: hp('1%')}}/>
                    }
                    <Text 
                        style={[
                            textStyles.h5,
                            textStyles.text,
                            textColor && {color: textColor}
                        ]}
                    >
                        {text}
                    </Text>
                    </>
            }
        </TouchableOpacity>
    )

}

export default Button

const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        backgroundColor: colors.primary,
        width:'100%',
        height:hp('7%'),
        marginBottom:hp('2%'),
        borderRadius:hp('1%'),
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: '4%',
    },
})