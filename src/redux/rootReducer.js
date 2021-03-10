import { STORE_DATA } from './actions';

const initialState = {
    userData: {
        title: "",
        firstName: "",
        lastName: "",
        dob: {
            day: "",
            month: "",
            year: "",
        },
        employment: "",
        postCode: "",
        houseNumber: "",
        income: ""
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_DATA:
            return {
                ...state,
                userData: { ...action.payload }
            }
        default:
            return state;
    }

}

export default rootReducer;