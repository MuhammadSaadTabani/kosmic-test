import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { icons } from '../../assets/icons'
import { colors } from '../../assets/colors'

const BottomBarIcon = ({active, source}) => {
  return (
        <View style={{alignItems: 'center'}}>
            <Image 
                source={source}
                style={[{
                    height: heightPercentageToDP('4%'),
                    width: heightPercentageToDP('4%'),
                }, active && {tintColor: colors.primary} ]}
            />
            {active &&
                <Image 
                    source={icons.activeDot}
                    style={{
                        height: heightPercentageToDP('1%'),
                        width: heightPercentageToDP('1%'),
                        marginTop: heightPercentageToDP('0.75%'),
                    }}
                />
            }
        </View>
  )
}

export default BottomBarIcon

const styles = StyleSheet.create({})