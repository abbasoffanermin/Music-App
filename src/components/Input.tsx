import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/colors/colors'
interface IInput{
 icon?:React.ReactNode,
 placeholder:string,
 value?:string,
 setValue?: (value: string) => void,
 inputStyle?: StyleProp<TextStyle>,
 onFocus?: () => void;
 onBlur?: () => void;


}
export const Input:React.FC<IInput> = ({icon,placeholder,value,setValue,inputStyle,onFocus,onBlur}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const onInputFocus = () => {
        setIsFocused(true);
        onFocus?.();
      };
    
      const onInputBlur = () => {
        setIsFocused(false);
        onBlur?.();
      };
  return (
    <View style={{flexDirection:'row',alignItems:'center',  gap:20,borderRadius:30}}>
       {icon?icon:null}
    <TextInput onBlur={onInputBlur} onFocus={onInputFocus} placeholder={placeholder} placeholderTextColor={Colors.lightGrey} value={value} onChangeText={setValue} style={[styles.input,inputStyle]}/>
    </View>
  )
}



const styles = StyleSheet.create({
    input:{
        paddingVertical: 11,
        fontFamily: 'Nunito-Regular',
        flexGrow: 1,
        fontSize:14,
        color:Colors.inp,
        
     
    }
})