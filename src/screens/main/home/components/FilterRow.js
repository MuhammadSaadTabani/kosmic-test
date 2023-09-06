import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { filters } from '../../../../constants'
import FilterItem from './FilterItem'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const FilterRow = () => {

    const [selectedOption, setSelectedOption] = useState(1);

    const onOptionPress = (id) => {
        setSelectedOption(id)
    }

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginVertical: hp('1%'), marginHorizontal: hp('-3%'), marginBottom: hp('2%')}}
            contentContainerStyle={{paddingHorizontal: hp('3%')}}
        >
            {filters.map(item =>
                <FilterItem
                    key={item.id}
                    text={item.text}
                    length={item.videoCount}
                    selected={item.id == selectedOption}
                    onPress={() => onOptionPress(item.id)}
                />
            )}
        </ScrollView>
    )
}

export default FilterRow

const styles = StyleSheet.create({})