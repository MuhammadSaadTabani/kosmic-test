import React, { useEffect, useState } from 'react'
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { Container, Error, Header } from '../../../components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../../assets/colors';

const Details = ({navigation, route}) => {


    const [filter, setFilter] = useState(filters[0]);
    

  
    

    const onFilterPress = filter => {
        // dispatch(changeDetailsFilter(filter))
        setFilter(filter)

    }
   
    const onDateChange = () => {
        
    }
  
    const renderDate = date => {
        if(date?.seconds){
            return new Date(date.seconds * 1000 + date.nanoseconds/1000000)
        }else{
            return new Date(date)
        }
    }

    return(
        <Container
            renderHeader={()=>
                <Header
                    backIcon
                    heading={`${type} Details`}
                />
            }
        >
        </Container>
    )
}

export default Details;

const styles = StyleSheet.create({
   
})

