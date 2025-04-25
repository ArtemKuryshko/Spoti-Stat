import { instance } from "@/api/api.interceptor"

export const ProfileService = {
    getProfile : async () => {
        const accessToken = localStorage.getItem('access_token');
        return instance("/me", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}