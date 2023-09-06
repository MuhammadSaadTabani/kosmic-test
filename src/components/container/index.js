import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors } from "../../assets/colors";

const Container = ({renderHeader, style, children, scrollDisabled}) => {
    return(
        <SafeAreaView style={[styles.container, style]}>
            {renderHeader && 
                <View style={{paddingHorizontal: hp('1.5%')}}>
                    {renderHeader()}
                </View>
            }
            <ScrollView 
                contentContainerStyle={{padding: hp('1.5%'), paddingBottom: hp('15%')}}
                scrollEnabled={!scrollDisabled}
            >   
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: StatusBar.currentHeight,
        // paddingBottom: hp('20%'),
        backgroundColor: colors.background,
    },
})

export default Container