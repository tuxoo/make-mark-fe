const ACCESS_TOKEN = 'access-token'

class LocalStorageService {

    public getAccessToken(): string | null {
        return localStorage.getItem(ACCESS_TOKEN)
    }

    public setAccessToken(token: string): void {
        localStorage.setItem(ACCESS_TOKEN, token)
    }

    public removeAccessToken(): void {
        localStorage.removeItem(ACCESS_TOKEN)
    }
}

export const localStorageService = new LocalStorageService()