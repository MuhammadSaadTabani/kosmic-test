import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from '../../../components'
import Search from '../collaborators/components/Search'


const SearchScreen = () => {
    return (
        <Container
            scrollDisabled
            renderHeader={() => 
                <Header/>
            }
        >
            <Search
                placeholder={"Search for videos"}
            />
        
        </Container>
    )
}

export default SearchScreen

