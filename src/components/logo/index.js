import React from 'react'
import { 
   Image 
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { images } from '../../assets/images';

const Logo = ({source, style}) => {
    return (
        <Image 
            source={source || images.logo}
            resizeMode={"cover"}
            style={[
                {
                    height: heightPercentageToDP('20%'),
                    width: heightPercentageToDP('40%'),
                    // height: '10%',
                    // width: '70%',
                    alignSelf: 'center',
                },
                style
            ]}
        />
    );
}
 
export default Logo;