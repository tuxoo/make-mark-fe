export interface Page<T> {
    content: T[],
    pageable: Pageable,
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: Sort,
    first: boolean,
    numberOfElements: number,
    empty: boolean,
}

export interface Pageable {
    offset: number,
    sort: Sort,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
}

export interface Sort {
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}

export interface Pagination {
    page: number,
    size: number,
    sort: string,
    sortBy: 'desc' | 'asc'
}
