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
		return Promise.reject(error)
	}
)