import React from 'react';
import CustomToast, {BaseToast} from 'react-native-toast-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors';


 
const SnackBar = ({position}) => {

    
    const toastConfig = {
        success: ({ text1, text2, props, ...rest }) => (
          <BaseToast
            {...rest}
            style={[{ 
                height: text2 ? hp('8%') : hp('6.25%'),
                width:"85%",
                borderLeftColor: colors.primary,
                marginLeft:hp('1%'),
                marginRight:hp('1%'),
                marginBottom:hp('0%'),
                marginTop:position=="top" ? hp('2.25%') : hp('0%'),
                borderRadius:hp('1%'),
                backgroundColor: colors.background,
            }, props.style]}
            contentContainerStyle={{ paddingHorizontal: hp('2%') }}
            text1Style={[{
                color:colors.primary,
                // fontFamily:regular,
                fontSize:hp('1.85%')
            },props.text1Style]}
            text2Style={[{
                color:colors.black,
                // fontFamily:regular,
                fontSize:hp('1.75%')
            },props.text2Style]}
            text1={text1}
            text2={text2}
            // trailingIcon={props.icon && null}
            onTrailingIconPress={()=>CustomToast.hide()}

          />
        )
    };
      
    return(
        <CustomToast 
            config={toastConfig}
            position={position}
            // ref={(ref) => CustomToast.setRef(ref)}
            visibilityTime={2000}
        /> 
    )
}
export default SnackBar;