import React from 'react';
import { View, Image, Text , StyleSheet, FlatList, ClippingRectangle} from 'react-native';
import { connect } from 'react-redux';
import {selectUsers} from '../redux/users'
import { UserCard} from '../commons/UserCard'

const mapStateToProps = (state) => ({
	users:selectUsers(state)
});

export const UsersList = connect(mapStateToProps)(({users , navigation}) => {
	return (
		<View style={styles.container}>
			<FlatList
            data={users}
            renderItem ={({item})=>{
               return(<UserCard user={item} navigation={navigation}/>)
            }}
         />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		marginTop:10,
	}
});
