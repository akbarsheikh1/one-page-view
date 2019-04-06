import React from 'react';
import Header from './Header.js';
import ImagesExample from './Image.js';
import Texts from './Text.js';
import {ScrollView} from 'react-native';



const App =() => {
  return(
    <ScrollView>
     <Header headerText={'Briyani'}/>
   <ImagesExample/>
   <Texts/> 
   </ScrollView>
  );
  
};

 export default App
