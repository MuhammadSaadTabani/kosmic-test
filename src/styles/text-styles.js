import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { fonts } from "../assets/fonts";
import { colors } from "../assets/colors";


export const textStyles = StyleSheet.create({
    h1:{
        fontSize: hp('4%'),
        fontFamily: fonts.bold,
    },
    h2:{
        fontSize: hp('3.5%'),
        fontFamily: fonts.semiBold,
    },
    h3:{
        fontSize: hp('3%'),
        fontFamily: fonts.semiBold,
    },
    h4:{
        fontSize: hp('2.75%'),
        fontFamily: fonts.semiBold,
    },
    h5:{
        fontSize: hp('2.5%'),
        fontFamily: fonts.regular,
    },
    h6:{
        fontSize: hp('2%'),
        fontFamily: fonts.regular,
    },
    text: {
        fontSize: hp('2%'),
        color: colors.fontColor,
    }
}) 