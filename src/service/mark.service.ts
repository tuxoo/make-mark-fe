import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";

export interface MarkForm {
    title: string,
    text: string,
}

export interface MarkSlim {
    id: number,
    title: string,
    text: string,
    createdAt: string
}

const path = '/api/v1/marks'

class MarkService {
    public addMark(mark: MarkForm) {
        return authHost.post(path, mark)
    }

    public getMarks(year: number, month: number, day: number): AxiosPromise<MarkSlim[]> {
        return authHost.get(path, {params: {year, month, day}})
    }

    public editMark(id: number, mark: MarkForm): AxiosPromise<MarkSlim> {
        return authHost.patch(`${path}/${id}`)
    }

    public deleteMark(id: number) {
        return authHost.delete(`${path}/${id}`)
    }
}

export const markService = new MarkService()