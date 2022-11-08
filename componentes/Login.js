import React from "react";
import { ImageBackground, View, Text, Image,StyleSheet, TextInput } from "react-native";

import Logo1 from './../assets/img/background/logo1.png';
import backgroundImagem from './../assets/img/background/bg_login.jpg';



export default function Login(){
    return (
        <View style={ estilos.container}>
            <ImageBackground source={ backgroundImagem } 
                resizeMode="cover" 
                style={estilos.imagemFundo}>
            <Image style={ estilos.img } source={ Logo1 } />
            
            <View style={ estilos.inputContainer }>
                <TextInput 
                    placeholder="Digite seu e-mail"
                    style={ estilos.input }
                />
                <TextInput 
                    placeholder="Digite sua senha"
                    style={ estilos.input }
                />
                
            </View>
            </ImageBackground>
        </View>
    )
}


const estilos = StyleSheet.create({
    container:{
        flex: 1
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 34,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        marginBottom: 12,
        color: '#FFF',
        backgroundColor: "#fff"
    },  
     img: {
        width: 300,
        height: 200,
        resizeMode: "contain"
     },
     imagemFundo:{
        flex: 1,
        justifyContent: "center"
     }
})