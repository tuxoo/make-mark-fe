import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";
import {Page, Pagination} from "../model/pagination.model";

export interface MarkForm {
    title: string,
    text: string,
}

export interface MarkSlim {
    id: string,
    title: string,
    text: string,
    createdAt: string
}

const path = '/api/v1/marks'

class MarkService {
    public addMark(mark: MarkForm) {
        return authHost.post(path, mark)
    }

    public getDailyMarks(year: number, month: number, day: number): AxiosPromise<MarkSlim[]> {
        return authHost.get(`${path}/daily`, {params: {year, month, day}})
    }

    public getMonthlyMarks(year: number, month: number, pagination?: Pagination): AxiosPromise<Page<MarkSlim>> {
        const page = pagination?.page
        const size = pagination?.size
        const sort = `${pagination?.sort},${pagination?.sortBy}`
        return authHost.get(`${path}/monthly`, {params: {year, month, page, size, sort}})
    }

    public editMark(id: string, mark: MarkForm): AxiosPromise<MarkSlim> {
        return authHost.patch(`${path}/${id}`, mark)
    }

    public deleteMark(id: string) {
        return authHost.delete(`${path}/${id}`)
    }
}

export const markService = new MarkService()