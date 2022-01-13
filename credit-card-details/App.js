import React ,{ useState ,submitHandler} from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
const [cardno, setCardno] = useState('');
const [cardValid , setCardValid] = useState(true);
const [scode, setScode] = useState('');
const [scodeValid , setScodeValid] = useState(true);
const [ym, setYm] = useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
 const clearAll = (val) =>{
        setCardno('');
        setFname('');
        setLname('');
        setScode('');
        setYm('') ;
    }
  const changeHander1 = (e) => {
    setCardno(e.target.value);
    setCardValid(false)
    if(e.target.value.length == 0){
      setCardValid(false);
    }
    if(e.target.value.length == 12){
      setCardValid(true);
    }
  };
  const changeHander2 = (e) => {
    setYm(e.target.value);
  };
  const changeHander3 = (e) => {
    setFname(e.target.value);
  };
  const changeHander4 = (e) => {
    setLname(e.target.value);
  };
  const changeHander5 = (e) => {
    setScode(e.target.value);
    setScodeValid(false);
    if(e.target.value.length ==4){
      setScodeValid(true);
    }
  };

  const openAlert=()=>{
    alert('details are successfully submitted');
  }
  return (
    <View style={styles.container}>

    <View style={styles.homeHeader}>
    <Text style={styles.headerTextCollectionsImages}>CREDIT CARD DETAILS</Text>
    </View>
      <TextInput
        style={styles.input1}
        value ={cardno}
        onChange ={changeHander1}
        placeholder="Card Number"
      />
      {!cardValid && <View style={styles.error}>contains only 12 digits</View>}
      <View style = {styles.twoCard}>
        <TextInput
          style={styles.input}
          value ={ym}
          onChange ={changeHander2}
          placeholder="MM/YY"
        />
        <View style={{flexDirection:'column'}}>
        <TextInput
          style={styles.input}
          value ={scode}
          onChange ={changeHander5}
          placeholder="Security code"
        />
        {!scodeValid && <View style={styles.error}>contains only 4 digits</View>}
        </View>
      </View>
      
      
      <View style = {styles.twoCard}>
        <TextInput
          style={styles.input}
          value ={fname}
          onChange ={changeHander3}
          placeholder="First name"
        />
        <TextInput
          style={styles.input}
          value ={lname}
          onChange ={changeHander4}
          placeholder="Last name"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress = {()=>  {clearAll(cardno,ym,fname,lname,scode) , openAlert()}}>
        <Text style={{textAlign:'center' , color:'white'}}>SUBMIT PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  error:{
   color:'red',
   fontSize:10,
   
  },
  input: {
    height: 40,
    margin: 12,
    width:135,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  twoCard:{
    flexDirection: 'row',
  },
  button: {
    margin: 12,
    backgroundColor: 'green',
    paddingVertical: 10,
    textAlign: 'center',
    padding: 10,
    width:300
  },
  headerTextCollectionsImages: {
    fontSize: 25,
    height:40,
    textAlign: 'center',
    color:'white',
    textAlignVertical: 'center',
  }, 
  homeHeader:{
    borderBottomWidth:2,
    backgroundColor:'blue',
    borderBottomColor:'gray'
  }
});
