export const STORE_DATA = 'STORE_DATA';

export const storeData = payload => {
    return {
        type: STORE_DATA,
        payload
    }
}
