import React ,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const exploreTab = (props) => {
    const [isDisabled, setIsDisabled] = useState(false)
    return (
        <TouchableOpacity style={{
            backgroundColor: isDisabled ? "#757575":  props.bgColor, 
            alignSelf: "center",
            padding: 7,
            marginTop: 20,
            borderRadius: 10,
            width: 100
        }} onPress={()=>{
            setIsDisabled(!isDisabled)
            props.filter(props.tabText)
            }}>
            <View >
                <Text style={{ textAlign: "center", color: 'white', fontWeight: '700' }}>{props.tabText}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default exploreTab
