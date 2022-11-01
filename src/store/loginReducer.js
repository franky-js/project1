const defaultLogin = {
    login: "",
    password: ""
}
const LOGIN = "LOGIN";

export const reducer = (state = defaultLogin, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, login: action.login, password: action.password}
        default:
            return state
    }
}

export const addDate = (login, password) => ({type: LOGIN, login: login, password: password});
