import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DetailContainer} from './DetailContainer'

export const DetailsCard = ({ user }) => {
	console.log(user);
	return (
		<View style={styles.card}>
			<DetailContainer detailText='Paymant Detail'  detailInfo={user.payment_time}/>
         <DetailContainer detailText='Type' detailInfo={user.payment_type}/>
		</View>
	);
};
const styles = StyleSheet.create({
	card: {
      marginTop:20,
		backgroundColor: 'white',
		borderColor: 'grey',
		borderWidth: 1,
      borderRadius: 4,
      height:100,
      paddingVertical:20,
      marginHorizontal:20
   },
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
      color:'grey'
   }
});
