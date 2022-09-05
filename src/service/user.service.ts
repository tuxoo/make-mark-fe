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

class AuthService {
    public signIn(signInRequest: SignInRequest): AxiosPromise<LoginResponse> {
        return host.post<LoginResponse>('api/v1/users/sign-in', signInRequest)
    }

    public signUp(signUpRequest: SignUpRequest) {
        return host.post<LoginResponse>('api/v1/users/sign-up', signUpRequest)
    }
}

export const authService = new AuthService()