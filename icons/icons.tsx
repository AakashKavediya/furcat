import React from 'react'
import type { PropsWithChildren } from 'react'
import {View,Text} from 'react-native'
import icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>

export default function Ycons(){
    return(
     <View>
        <Text>Hey this is aakash</Text>
     </View>   
    )
}

// export default function Icon({name}: IconsProps) {
// const Icon = (name) =>{
//     switch (name) {
//         case 'circle':
//             return <Icon name='circle-thin'  />
//             break;
//         case 'cross':
//             return <Icon name='times'  />
//             break;
    
//         default:
//             return <Icon name='pencil'  />

//     }
// }}