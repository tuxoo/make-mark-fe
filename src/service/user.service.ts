import {AxiosPromise} from 'axios';
import {host} from "../http/axios";
import {User} from "../model/user.model";

export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface SignInRequest {
    email: string,
    password: string,
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: User,
}

const path = '/api/v1'

class AuthService {
    public signIn(signInRequest: SignInRequest): AxiosPromise<LoginResponse> {
        return host.post<LoginResponse>(`${path}/sign-in`, signInRequest)
    }

    public signUp(signUpRequest: SignUpRequest) {
        return host.post<LoginResponse>(`${path}/sign-up`, signUpRequest)
    }
}

export const authService = new AuthService()