import React, { useReducer } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setActiveUser } from '../redux/users';


export const UserCard = connect(null,{setActiveUser})(({ user, navigation,setActiveUser }) => {
	const onPressHandler = (user) => {
		navigation.navigate('Details');
      setActiveUser(user)
	};
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPressHandler(user)}>
			<Image source={{ uri: user.picture }} style={styles.image} />
         <Text>{user.name}</Text>
			<Text style={styles.amount}>{user.amount}</Text>
		</TouchableOpacity>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// marginHorizontal: 20,
      marginBottom: 10,
      borderBottomWidth:1,
      paddingBottom:5
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 30
   },
   amount:{
      color:'green',
   }
});
