import React, { useEffect, useState } from 'react'
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';
import { Container, Error, Header } from '../../../components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../../assets/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import Row from './components/Row';
import DatePicker from '../home/components/DatePicker';
import { icons } from '../../../assets/icons';
import Collaborators from '../home/components/Collaborators';
import Status from '../home/components/Status';
import GraphFilter from './components/GraphFilter';
import { textStyles } from '../../../styles/text-styles';
import Graph from '../home/components/Graph';
import { MoreIcon } from '../../../components/icon';


const Details = ({navigation, route}) => {

    const [filter, setFilter] = useState(1);

    const onFilterPress = () => {

    }
    return(
        <>
        <StatusBar
            barStyle={"dark-content"}
            translucent
            backgroundColor={'transparent'}
        />
        <Header
            backIcon
            style={styles.header}
        />
        <ScrollView style={styles.container}>
            <Image
                source={images.videoDetailCover}
                style={styles.cover}
            />
            <View style={{padding: hp('1.5%')}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={styles.text}>Ads video editor</Text>
                        <Text style={styles.name}>First Project</Text>
                    </View>
                    <MoreIcon/>
                </View>

                <Row
                    style={{marginTop: hp('4%')}}
                    heading={"Project Date"}
                    rightSideComponent={() => (
                        <DatePicker/>
                    )}
                />
                <Row
                    heading={"Collaborators"}
                    rightSideComponent={() => (
                        <Collaborators/>
                    )}
                />
                <Row
                    style={styles.separator}
                    heading={"Status"}
                    rightSideComponent={() => (
                        <Status
                            status={"Pending"}
                        />
                    )}
                />

                <Row
                    heading={"Statistics"}
                    headingStyle={textStyles.h3}
                    rightSideComponent={() =>(
                        <GraphFilter
                            filterText={"Weekly"}
                            onPress={onFilterPress}
                        />
                    )}
                />

                <Graph
                    extended
                    // style={{marginTop: hp('5%')}}
                />
            </View>

           
        </ScrollView>
        </>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.primary
    },
    cover: {
        height: hp('42%'),
        width: '100%',
    },
    header: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        padding: hp('1.5%'),
        paddingTop: StatusBar.currentHeight,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: hp('1.65%'),
        color: colors.white
    },
    name: {
        fontFamily: fonts.medium,
        fontSize: hp('2.5%'),
        color: colors.white
    },
    separator: {
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        paddingBottom: hp('1.5  %')
    }
})

