//Action Types
const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
const SET_USERS="SET_USERS"

//Selectors
export const MODULE_NAME = 'users';
export const selectUsers = (state) => state[MODULE_NAME].users;
export const selectActiveUser = (state) => state[MODULE_NAME].activeUser;

//Reducer
const initialState = {
	users: [
		{
			id: 1,
			name: 'Durward',
			amount: '$7.65',
			payment_time: '5/11/2020',
			payment_type: 'mastercard',
			picture:
				'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
		},
		{
			id: 2,
			name: 'Omero',
			amount: '$2.23',
			payment_time: '4/6/2020',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
		},
		{
			id: 3,
			name: 'Calley',
			amount: '$4.02',
			payment_time: '4/17/2020',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
		},
		{
			id: 4,
			name: 'Ardath',
			amount: '$2.07',
			payment_time: '8/19/2019',
			payment_type: 'diners-club-us-ca',
			picture:
				'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80'
		},
		{
			id: 5,
			name: 'Gilemette',
			amount: '$8.68',
			payment_time: '11/25/2019',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
		},
		{
			id: 6,
			name: 'Darrel',
			amount: '$4.96',
			payment_time: '8/23/2019',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
		},
		{
			id: 7,
			name: 'Adrianne',
			amount: '$2.86',
			payment_time: '3/28/2020',
			payment_type: 'bankcard',
			picture:
				'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
		},
		{
			id: 8,
			name: 'Mona',
			amount: '$1.25',
			payment_time: '11/11/2019',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1571816119553-df62a2eedf56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
		},
		{
			id: 9,
			name: 'Koressa',
			amount: '$6.77',
			payment_time: '12/13/2019',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
		},
		{
			id: 10,
			name: 'Alli',
			amount: '$2.60',
			payment_time: '8/23/2019',
			payment_type: 'jcb',
			picture:
				'https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
		}
	],
	activeUser: {}
};
export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_ACTIVE_USER:
			return {
				...state,
				activeUser: payload
			};
		case SET_USERS:
			return {
				...state,
				users: payload
			};
		default:
			return state;
	}
}

//ActionCreators

export const setActiveUser = (payload) => ({
	type: SET_ACTIVE_USER,
	payload
});
export const setUsers = (payload) => ({
	type: SET_USERS,
	payload
});