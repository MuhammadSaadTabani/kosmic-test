import React from 'react'
import { Button, Container, Header } from '../../../components'
import { colors } from '../../../assets/colors'
import { StyleSheet } from 'react-native'



const Settings = ({navigation}) => {

  
    
    return (
        <Container
            style={{backgroundColor: colors.primary}}
            renderHeader={()=>
                <Header
                    hideCollaborators
                    heading="Settings"
                />
            }
        >
            
            <Button
                text={"Contact Us"}
                style={styles.btnStyle}
            />
            <Button
                text={"Rate This App"}
                style={styles.btnStyle}
            />
            <Button
                text={"More Apps"}
                style={styles.btnStyle}
            />
            <Button
                text={"Check For Updates"}
                style={styles.btnStyle}
            />
            <Button
                text={"Privacy Policy"}
                style={styles.btnStyle}
            />
        </Container>
    )
}

export default Settings

const styles = StyleSheet.create({
    btnStyle: {justifyContent: 'flex-start', backgroundColor: colors.background}
})
