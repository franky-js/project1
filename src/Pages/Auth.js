import React, {useEffect, useState} from "react";
import './../App.css';
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {addDate} from "../store/loginReducer";

function Auth() {

    let refLogin = React.createRef();
    let refPass = React.createRef();

    const [emailDirty, setEmailDirty] = useState(false) // для проверки пустоты полей
    const [passDirty, setPassDirty] = useState(false)
    const [Error, setError] = useState('') // для изменения текста ошибки
    const [formValid, setFormValid] = useState(false) // для блокировки кнопки

    useEffect(() => {
        if (emailDirty && passDirty) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [emailDirty, passDirty])

    const hoverCheck = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'email':
                if (e.target.value === '') {
                    setEmailDirty(false)
                    setError('Введите емэйл')
                    break
                } else {
                    setError('')
                    setEmailDirty(true)
                    break
                }
            case 'pass':
                if (e.target.value === '') {
                    setError('Введите пароль')
                    setPassDirty(false)
                    break
                } else {
                    setError('')
                    setPassDirty(true)
                    break
                }
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

    const changeLogin = () => {
        let text = {
            login: refLogin.current.value,
            password: refPass.current.value
        }
        dispatch(addDate(text.login, text.password));
        navigate('/result')
    }

    return (

        <div className='Body'>
            <header>Авторизация пользователя</header>
            <div className='h3'>
                <input placeholder="Логин"
                       ref={refLogin}
                       onBlur={e => hoverCheck(e)}
                       name="email"
                       className="text-field__input"
                ></input>
                <label className="text-field__label">Логин</label>
            </div>
            <div className='h2'>
                <div className='h3'>
                    <input placeholder="Пароль"
                           className="text-field__input"
                           ref={refPass}
                           onBlur={e => hoverCheck(e)}
                           name="pass"
                    ></input>
                    <label className="text-field__label">Пароль</label>
                </div>
                <div className="Error">{Error}</div>
            </div>
            <button disabled={!formValid}
                    onClick={() => changeLogin()}
            >Войти
            </button>
            <div className='h1'>

                <NavLink to="/reg">Зарегистрироваться</NavLink>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Забыли пароль?</a>
            </div>
        </div>
    );
}

export default Auth;
