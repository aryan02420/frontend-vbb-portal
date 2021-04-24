import axios from 'axios';

export const MENTOR = 'MENTOR';
export const COMMIT = 'COMMIT';
export const SET_LIBRARIES = 'SET_LIBRARIES';
export const SET_LANGUAGES = 'SET_LANGUAGES';

export const mentorChange = () => {
    return {
        typy: MENTOR
    }
}

export const commitChange = () => {
    return {
        typy: COMMIT
    }
}


export const setLibraries = (data) => {
    return {
        type: SET_LIBRARIES,
        payload: data
    }
}

export const setLanguages = (data) => {
    return {
        type: SET_LANGUAGES,
        payload: data
    }
}

// async action
export const fetchBookingData = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/api/library/')
        .then( res => {
            setLibraries(res.data)
        })
        .catch( err => {
            console.log(err);
        });
        axios.get('http://127.0.0.1:8000/api/language/')
        .then( res => {
            setLanguages(res.data)
        })
        .catch( err => {
            console.log(err);
        });
    }
}