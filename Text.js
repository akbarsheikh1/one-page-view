import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class Texts extends Component {
  render() {
    return (
        <View>
      <Text style={styles.text}>Lucknow Briyani</Text>
      <Text style={styles.text3}>How to make Lucknowi Mutton Biryani</Text>
     <Text style={styles.text1} >
         step1
     </Text>
     <Text style={styles.text2}>
     To make the garam masala, dry roast all the whole spices. Once they are roasted, transfer them to a masala grinder and grind them finely. Simultaneously, wash the basmati rice and drain excess water. Boil the rice in double the amount of water and remove from fire and drain till it is half done.
     </Text>
     <Text style={styles.text1}>
         Step2
     </Text>
     <Text style={styles.text2}>
     For mutton marination, to half kg mutton, add ginger-garlic paste, turmeric and chilli powder. Then add cashew nut paste, garam masala, curd and whisk it. Cover it with a lid and put it in the refrigerator for an hour. This process is important to allow the flavour of spices to infuse in the mutton.
     </Text>
     <Text style={styles.text1}>
         Step3
     </Text>
     <Text style={styles.text2}>
     Thinly slice the onion and deep fry it in some oil and keep aside. Now, let the meat come to room temperature. Season the meat with salt. Add ghee and oil in the handi. Once it is sufficiently hot, transfer the marinated meat from the bowl to the handi.
     </Text>
     <Text style={styles.text1}>
         Step4
     </Text>
     <Text style={styles.text2}>
     Stir and cook the meat for a few minutes on high flame, till it is roasted. Cover with the lid and simmer it for another half an hour. Meanwhile, add saffron to the milk and mix well so that the saffron releases its colour and aroma in the milk. Now layer the mutton with cooked rice and add the saffron-milk mixture.
     </Text>
     <Text style={styles.text1}>
         Step5
     </Text>
     <Text style={styles.text2}>
     Add a little salt, garam masala, fried onions and the remaining ghee over it. Add mace powder and mix well. Cover the handi with the lid and weight it down with something heavy. Keep the flame low. Cook for about half an hour. Serve it hot with raita or salad of your choice. You can also serve it with shorba.
     </Text>
      </View>
    )
  }
}
export default Texts

const styles =StyleSheet.create({
    text:{
        fontSize: 20,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 65,
         
    },
    text1:{
        fontSize: 25,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 5,
        marginRight: 50,
        marginTop: 3,
        color: 'black'
    },
    text2:{
    fontStyle: 'italic',
    fontSize: 20,   
    justifyContent: 'center',
    alignContent: 'center', 
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    color: 'brown'
    
    },
    text3:{
        marginTop: 10,
        fontSize: 15,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#a9a9a9',
        paddingLeft: 65, 
        backgroundColor:'yellow' 
    }
})