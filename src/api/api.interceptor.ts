import { handleUnauthorized } from '@/utils/auth.util';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json'
    },
});

instance.interceptors.request.use(
	config => {
		config.params = {
			...config.params
		}
		return config
	},
	error => {
		if (error.response?.status === 401) {
			handleUnauthorized()
		}
		
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.status === 401) {
			handleUnauthorized()
		}
		return Promise.reject(error)
	}
)