import React from 'react'
import { View } from 'react-native';
import { Logo } from '../../components';
import { colors } from '../../assets/colors';

const Splash = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
            <Logo />
        </View>
    );
}
 
export default Splash;