import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const DetailContainer = ({ detailText ,detailInfo}) => {
	return (
			<View style={styles.cardItem}>
				<Text style={styles.explanationText}>{detailText}</Text>
				<Text style={styles.information}>{detailInfo}</Text>
            <Ionicons name="ios-information-circle-outline" size={24} color="blue" />
			</View>
	);
};
const styles = StyleSheet.create({
   cardItem:{
      flexDirection: 'row', 
      justifyContent:'space-between',
      height:26,
      borderBottomWidth:1,
      width:"90%",
      alignSelf:'center',
   },
   explanationText:{
      fontSize:20
   },
   information:{
      fontSize:18,
      color:'grey',
      position:'absolute',
      right:30
   }
});
