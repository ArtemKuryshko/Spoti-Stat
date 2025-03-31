import { instance } from "@/api/api.interceptor"
import { AuthService } from "./auth.service";

export const ProfileService = {
    getProfile : async () => {
        const accessToken = await AuthService.getToken();
        return instance("/me", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}