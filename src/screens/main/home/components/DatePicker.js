import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getFilterDate } from '../../../../utils';
import { textStyles } from '../../../../styles/text-styles';
import { colors } from '../../../../assets/colors';

const DatePicker = ({heading, onChange}) => {

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());

    
    const onDatePress = (type) => { 
        setVisible(true);
    }
    const onDateChange = (event, selectedDate) => {
      setDate(selectedDate)
    };
    
    return(
        <TouchableOpacity onPress={onDatePress} style={[styles.container]}>
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
    )
}

export default DatePicker;

const styles = StyleSheet.create({
    container: {
    },
   
    date:{
        color: colors.white,
        marginLeft: hp('1%')
    }
})