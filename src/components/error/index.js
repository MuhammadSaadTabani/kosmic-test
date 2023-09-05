import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fonts } from '../../assets/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors';

const Error = ({text}) => {
    return(
        <View style={styles.container}>
            {/* <Icon name={"error-outline"} size={50} color={colors.border}/> */}
            <Text style={[styles.text,{color:colors.gray}]}>{text}</Text>
        </View>
    )
}
export default Error;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:hp('2.25%'),
        fontFamily:fonts.medium,
        margin:hp('2%'),
        textAlign:'center',  
    }
})