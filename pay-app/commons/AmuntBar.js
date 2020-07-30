import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AmuntBar = ({ amount }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.amount}>{amount}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
      alignItems:'center',
      marginTop:20
   },
   amount:{
      fontSize:60
   }
});
