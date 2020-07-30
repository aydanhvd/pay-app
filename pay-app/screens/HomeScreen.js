import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../commons/SeachBar';
import { ProgresBarsList } from '../components/ProgresBarsList';
import { UsersList } from '../components/UsersList';


export const HomeScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<SearchBar/>
			{/* <ProgresBarsList/> */}
			<UsersList navigation={navigation}/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal:10
	}
});
