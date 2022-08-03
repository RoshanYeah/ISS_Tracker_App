import React, { Component } from "react"
import {Text, View, StyleSheet} from "react" 

export default class ISSScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text} >ISS Screen</Text>
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