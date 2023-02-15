import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../constants/colors'

const NumberContainer = ({children}) => {
  return (
   <View style={styles.container} >
    <Text style={styles.numberText}>{children}</Text>
   </View>
  )
}

export default NumberContainer


const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.primary2,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:"center"
    },
    numberText:{
        color:Colors.primary2,
        // fontWeight:"bold",
        fontSize:26,
        fontFamily:"open-sans-bold"
    }
})