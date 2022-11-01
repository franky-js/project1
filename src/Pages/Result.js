import React from "react";
import './../App.css';
import {useSelector} from "react-redux";
import axios from "axios";

function Result() {

    const login = useSelector(state => state.login)
    const password = useSelector(state => state.password)

    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        login: login,
        password: password
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div className='Body'>
            <header>Успешная авторизация!</header>
            <div className="h2">
                <div> Вы успешно авторизовались!</div>
                <div> Ваш логин: {login} </div>
            </div>
        </div>
    );
}

export default Result;