import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";

const path = '/api/v1/items'

class ItemService {
    public fetchYears(): AxiosPromise<number[]> {
        return authHost.get(`${path}/years`)
    }
}

export const itemService = new ItemService()