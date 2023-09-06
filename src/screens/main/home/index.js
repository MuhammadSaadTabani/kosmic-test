import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Container, Header } from '../../../components'
import DateTimeSection from './components/DateTimeSection'
import FilterRow from './components/FilterRow'
import EditVideoSection from './components/EditVideoSection'
import Swiper from 'react-native-deck-swiper'
import VideoCard from './components/VideoCard'



const Home = ({navigation}) => {
 
  return (
      <Container
        renderHeader={() => 
          <Header/>
        }
      >
        <DateTimeSection
          time={"03:24"}
          day={"Monday"}
        />
        <FilterRow />
        <EditVideoSection /> 
        
      </Container>
     
  )
}

export default Home
