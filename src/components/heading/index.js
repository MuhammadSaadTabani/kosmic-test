import React from 'react'
import { 
    View,
    Text,
} from 'react-native';
import { textStyles } from '../../styles/text-styles';

const Heading = ({text, style}) => {
    return(
        <Text 
            style={[
                textStyles.h2,
                textStyles.text, 
                style
            ]}
        >
            {text}
        </Text>
    )
}
export default Heading;