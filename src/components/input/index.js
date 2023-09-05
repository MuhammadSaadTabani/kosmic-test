import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors';
import { textStyles } from '../../styles/text-styles';


const IconInput = ({
    style,
    inputStyle,
    containerStyle,
    label, 
    onChange, 
    value,
    disabled,
    onPress,
    iconColor,
    customIcon,
    icon,
    placeholder,
    inputRef,
    onSubmitPress,
    blur,
    pass, 
    keyboard, 
    phone, 
    ...props
}) => {
    const input = useRef(null);
    const [visible, setVisible]  = useState(true);
    
    return(
        <TouchableOpacity 
            disabled={!disabled} 
            onPress={onPress} 
            activeOpacity={1} 
            style={[{marginTop: hp('2%')}, containerStyle]}
        >
            {label &&
                <Text 
                    style={[
                        textStyles.h6,
                        textStyles.text,
                        {color: colors.primary, marginBottom: hp('1%')}
                    ]}
                >
                    {label}
                </Text>
            }
            <View style={[styles.inputRow, style]}>
            
                <TextInput
                    {...props}
                    blurOnSubmit={blur}
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input,inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={'gray'}
                    editable={!disabled}
                    ref={inputRef}
                    onSubmitEditing={onSubmitPress}
                    secureTextEntry={pass ? visible : !visible}
                    keyboardType={keyboard ? keyboard : "default"}
                />
                {pass
                    ?
                    value == ""
                        ?<Icon name={icon} size={22} color={iconColor} />
                        :<Icon onPress={()=>setVisible(!visible)} name={visible ? 'eye' : 'eye-off'} size={22} color={iconColor} />
                    :
                    customIcon 
                        ?
                        customIcon()
                        :
                        icon &&
                        <Icon name={icon} size={22} color={iconColor} />
                }
            </View>
        </TouchableOpacity>
    )
}

export default IconInput

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal:hp('1.5%'),
        width:'100%',
        height:hp('6.5%'),
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:hp('1%'),
        borderWidth: 1,
        borderColor: colors.primary,
        // marginTop:hp('2.5%'),
    },
    inputStyle: {
        flexDirection:"row",
        alignItems:'center',
        // paddingLeft:hp('1.5%'),
        // paddingRight:hp('1.5%'),
        width:'100%',
        height:hp('6.5%'),
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:hp('1%'),
        borderWidth: 1,
        borderColor: colors.primary,
        marginTop:hp('2.5%'),
    },
    input:{
        flex:1,
        fontSize:hp('2.25%'),
        color:'black',
    },
})