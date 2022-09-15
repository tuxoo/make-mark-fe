import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";

export interface Mark {
    id: number,
    title: string,
    text: string,
    createdAt: string
}

const path = '/api/v1/marks'

class MarkService {
    public addMark(mark: Mark) {
        return authHost.post(path)
    }

    public getMarks(): AxiosPromise<Mark[]> {
        return authHost.get(path)
    }

    public editMark(id: number, mark: Mark): AxiosPromise<Mark> {
        return authHost.patch<Mark>(`${path}/${id}`)
    }

    public deleteMark(id: number) {
        return authHost.delete(`${path}/${id}`)
    }
}

export const markService = new MarkService()