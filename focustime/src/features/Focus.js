import React ,{useState} from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper';
import {RoundedButton} from "../components/RoundedButton";
import {spacing} from "../utils/sizes"
import {colors} from "../utils/colors"
export const Focus=()=>{
  const [subject, setSubject] = useState(null)
  return(
<SafeAreaView style={styles.container}>
<SafeAreaView style={styles.inputContainer}>
<TextInput style={styles.textInput} onChangeText={setSubject} label="What would you like to focus on?"/>
<SafeAreaView style={styles.button}>
<RoundedButton title="+" size={50}/>
</SafeAreaView>
</SafeAreaView>
</SafeAreaView>
);
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.darkblue,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },inputContainer:{
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  
})