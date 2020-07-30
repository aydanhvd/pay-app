import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

export const ProgresBarsList = () => {
	const chartConfig = {
		color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false // optional
	};
	return (
		<View style={styles.container}>
			<ProgressChart
				data={[0.4, 0.6, 0.8]}
				width={screenWidth}
				height={220}
				strokeWidth={16}
				radius={32}
				chartConfig={chartConfig}
				hideLegend={false}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10
	}
});
