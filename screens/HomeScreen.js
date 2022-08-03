import React, { Component } from "react"
import {Text, View, StyleSheet} from "react" 
import ISSScreen from "./ISSscreen"
import MeteorScreen from "./MeteorScreen"

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text} >Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#CAE7DF'
},
text:{
    alignItems:'center',
    marginTop:200,
    color:'black',
    fontSize:20
}
})