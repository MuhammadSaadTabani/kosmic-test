import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Header } from '../../../components'
import Search from './components/Search'
import { collaborators } from '../../../constants'
import CollaboratorRow from './components/CollaboratorRow'
import { SwipeListView } from 'react-native-swipe-list-view';
import { heightPercentageToDP  as hp} from 'react-native-responsive-screen'
import { icons } from '../../../assets/icons'


const Collaborators = () => {

    const [data, setData] = useState(collaborators)
    const [searchResults, setSearchResults] = useState(data);
    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
        setSearchResults(data)
    }, [data])
    const handleSearch = (text) => {
        const filteredRecords = data.filter((record) =>
          record.name.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(filteredRecords)
        setSearchText(text)
    };

    const deleteColab = (id) => {
        const deldata = data.filter(item => item.id !== id)
        setData(deldata)
    }

    return (
        <Container
            scrollDisabled
            renderHeader={() => 
                <Header/>
            }
        >
            <Search
                value={searchText}
                onChange={handleSearch}
            />
            <SwipeListView
                data={searchResults}
                renderItem={ (data, rowMap) => (
                    <CollaboratorRow
                        image={data.item.image}
                        name={data.item.name}
                        email={data.item.email}
                    />
                )}
                renderHiddenItem={ (data, rowMap) => (
                    <TouchableOpacity onPress={()=>deleteColab(data.item.id)} style={styles.hiddenView}>
                        <Image
                            source={icons.trash}
                            style={{height: hp('4%'), width: hp('4%'),}}
                        />
                    </TouchableOpacity>
                )}
                leftOpenValue={0}
                stopLeftSwipe={1}
                rightOpenValue={hp('-8.5%')}
            />
        
        </Container>
    )
}

export default Collaborators

const styles = StyleSheet.create({
    hiddenView: {
        height: hp('12%'),
        width: hp('8%'),
        backgroundColor: 'red',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    }
})