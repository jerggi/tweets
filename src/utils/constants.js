export const ASCENDING = 'ASCENDING'
export const DESCENDING = 'DESCENDING'

export const CREATED_AT = 'created_at'
export const FAVORITE_COUNT = 'favorite_count'

export const sortOptions = {
    "date-asc": {
        sortOption: CREATED_AT,
        orderOption: ASCENDING,
        label: 'Date (newest)',
    },
    "date-desc": {
        sortOption: CREATED_AT,
        orderOption: DESCENDING,
        label: 'Date (oldest)',
    },
    "favorite-asc": {
        sortOption: FAVORITE_COUNT,
        orderOption: ASCENDING,
        label: 'Likes (ascending)'
    },
    "favorite-desc": {
        sortOption: FAVORITE_COUNT,
        orderOption: DESCENDING,
        label: 'Likes (descending)'
    }
}
