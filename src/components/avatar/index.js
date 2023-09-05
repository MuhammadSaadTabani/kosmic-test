import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';


const Avatar = ({size, style, imageStyle, source, disabled, edit, onPress}) => {
    return (
        <TouchableOpacity 
            disabled={disabled}
            onPress={onPress} 
            style={[
                { 
                    height: size || hp('20%'), 
                    width: size || hp('20%'), 
                    // borderWidth: 2, 
                    borderRadius: 1000, 
                    borderColor: colors.white, 
                    alignSelf: 'center', 
                },
                style
            ]}
        >
            <Image
                source={source || images.user}
                style={[
                    {
                        height: size || hp('20%'), 
                        width: size || hp('20%'), 
                        borderWidth: 2, 
                        borderRadius: 1000, 
                        borderColor: colors.white, 
                    },
                    imageStyle,
                ]}
            />
            {edit &&
                <View 
                    style={{
                        padding: hp('1%'),
                        backgroundColor: colors.white,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        borderRadius: 100,
                    }}
                >
                    <Icon
                        name="edit"
                        size={24}
                        color={colors.primary}
                    />
                </View>
            }
        </TouchableOpacity>
    );
}
 
export default Avatar