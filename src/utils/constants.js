export const ASCENDING = 'ASCENDING'
export const DESCENDING = 'DESCENDING'

export const CREATED_AT = 'created_at'
export const FAVORITE_COUNT = 'favorite_count'

export const sortOptions = {
    "date-asc": {
        sortOption: CREATED_AT,
        orderOption: ASCENDING,
    },
    "date-desc": {
        sortOption: CREATED_AT,
        orderOption: DESCENDING,
    },
    "favorite-asc": {
        sortOption: FAVORITE_COUNT,
        orderOption: ASCENDING,
    },
    "favorite-desc": {
        sortOption: FAVORITE_COUNT,
        orderOption: DESCENDING,
    }
}
