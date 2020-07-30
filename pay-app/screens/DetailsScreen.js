import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { AmuntBar } from '../commons/AmuntBar';
import { DetailsCard } from '../commons/DetailsCard';
import { selectActiveUser } from '../redux/users';

const mapStateToProps = (state) => ({
	user:selectActiveUser(state)
});
export const DetailsScreen = connect(mapStateToProps)(({user}) => {
	return (
		<View style={styles.container}>
		<AmuntBar amount={user.amount}/>
			<DetailsCard user={user}/>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});
