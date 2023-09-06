import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../assets/colors'
import Icon from 'react-native-vector-icons/Octicons'
import { fonts } from '../../../../assets/fonts'

const Search = ({placeholder, value, onChange}) => {
    return (
        <View style={styles.container}>
            <Icon
                name="search"
                size={30}
                color={colors.white}
            />
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder={placeholder || 'Search for collaborater'}
                placeholderTextColor={'gray'}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    container: {
        borderRadius: hp('3%'),
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: hp('2%'),
        height: hp('6.5%'),
        marginBottom: hp('2%')
    },
    input: {
        flex:1,
        fontSize: hp('2.25%'),
        color: colors.white,
        fontFamily: fonts.regular,
        marginLeft: hp('1%'),
        height: hp('6.5%'),
        textAlignVertical: 'center'
    }
})