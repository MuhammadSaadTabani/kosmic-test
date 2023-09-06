import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getFilterDate } from '../../../../utils';
import { textStyles } from '../../../../styles/text-styles';
import { colors } from '../../../../assets/colors';
import { icons } from '../../../../assets/icons';

const DatePicker = ({heading, onChange, disbaled, style}) => {

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    
    const onDatePress = (type) => { 
        setVisible(true);
    }
    const onDateChange = (event, selectedDate) => {
      setDate(selectedDate)
    };
    
    return(
        <View style={[styles.container, style]}>
            <Image
                source={icons.calendar2}
                style={styles.icon}
            />
            <TouchableOpacity disabled={disbaled} onPress={onDatePress} >
                <Text style={[textStyles.text, styles.date]}>{getFilterDate(date)}</Text>
                {visible &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        display="calendar"
                        onChange={onDateChange}
                    />
                }
            </TouchableOpacity>
        </View>
    )
}

export default DatePicker;

const styles = StyleSheet.create({
    container: {
        padding: hp('1%'),
        borderRadius: hp('1%'),
        backgroundColor: '#6546B5',
        flexDirection: 'row',
    },
    icon: {
        height: hp('2.5%'),
        width: hp('2.5%'),
    },
    date:{
        color: colors.white,
        marginLeft: hp('1%')
    }
})