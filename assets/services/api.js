import * as axios from 'axios/index';

const API = axios.create({
	baseURL: '/api/',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

function get(url, args) {
	return new Promise((resolve, reject) => {
		API({
			method: 'GET',
			url: url,
			params: args,
			headers: {
				'Authorization': 'Bearer ' + localStorage['user-token']
			}
		}).then(response => {
			resolve(response.data);
		}).catch(error => {
			console.log(error);
			reject(error);
		});
	});
}

function post(url, args) {
	return new Promise((resolve, reject) => {
		let formData = new FormData();

		for (let key in args) {
			formData.append(key, args[key]);
		}

		API({
			method: 'POST',
			url: url,
			data: formData,
			headers: {
				'Authorization': 'Bearer ' + localStorage['user-token'],
			}
		}).then(response => {
			resolve(response.data);
		}).catch(error => {
			console.log(error);
			reject(error);
		});
	});
}
export default {
	get,
	post
};