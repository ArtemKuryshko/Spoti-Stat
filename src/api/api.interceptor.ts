import { PathEnum } from '@/types/path.enum';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';

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

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.status === 401) {
			signOut();
			redirect(PathEnum.LOGIN)
		}
		return Promise.reject(error)
	}
)