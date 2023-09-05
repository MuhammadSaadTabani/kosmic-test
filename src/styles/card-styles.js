import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const cardStyles = StyleSheet.create({


    cardShadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    graphCardContainer:{
        padding: hp('2%'),
        borderRadius: hp('2%'),
        backgroundColor: colors.white,
        marginVertical: hp('2%'),
        marginTop: hp('3%'),
    },
})