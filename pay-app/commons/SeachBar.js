import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { selectUsers } from '../redux/users';

const mapStateToProps = (state) => ({
	users: selectUsers(state)
});
export const SearchBar = connect(mapStateToProps)(({ users }) => {
	const [ searchName, setSearchName ] = useState('');
	const onPressHandler = () => {
		let user = usersArr.filter((user) => {
			return users.name.includes(searchName.toLowerCase().trim());
		});
		setSaerchName('');
	};
	return (
		<View style={styles.container}>
			<TextInput
				value={searchName}
				style={styles.search}
				placeholder="search..."
				onChangeText={(value) => setSearchName(value)}
			/>
			<AntDesign name="search1" size={24} color="black" />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 40,
		backgroundColor: 'white',
		borderWidth: 1,
		borderRadius: 30,
		marginTop: 20,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	search: {
		width: '85%',
		paddingHorizontal: 10
	}
});
