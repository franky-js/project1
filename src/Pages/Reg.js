import React, {useEffect, useState} from "react";
import './../App.css';
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {addDate} from "../store/loginReducer";

function Reg() {

    let refLogin = React.createRef();
    let refPass = React.createRef();

    const [pass, setPass] = useState('') // для сохранения значения пароля
    const [repass, setRepass] = useState('') // для сохранения значения дубля пароля
    const [emailDirty, setEmailDirty] = useState(false) // для проверки пустоты полей
    const [passDirty, setPassDirty] = useState(false)
    const [repassDirty, setRepassDirty] = useState(false)
    const [Error, setError] = useState('') // для изменения текста ошибки
    const [formValid, setFormValid] = useState(false) // для блокировки кнопки

    useEffect(() => {
        if (emailDirty && passDirty && repassDirty) {
            if (pass !== repass) {
                setError("Пароли не совпадают")
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        } else
            setFormValid(false)
    }, [emailDirty, passDirty, repassDirty, pass, repass])

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
                    setPass(e.target.value)
                    setPassDirty(true)
                    break
                }
            case 'repass':
                if (e.target.value === '') {
                    setError('Повторите пароль')
                    setRepassDirty(false)
                    break
                } else {
                    setRepassDirty(true)
                    setRepass(e.target.value)
                    setError('')
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
            <header>Регистрация пользователя</header>
            <div className="h3">
                <input placeholder="Логин"
                       ref={refLogin}
                       onBlur={e => hoverCheck(e)}
                       name="email"
                       className="text-field__input"
                ></input>
                <label className="text-field__label">Логин</label>
            </div>
            <div className="h3">
                <input placeholder="Пароль"
                       ref={refPass}
                       onBlur={e => hoverCheck(e)}
                       name="pass"
                       className="text-field__input"
                ></input>
                <label className="text-field__label">Пароль</label>
            </div>
            <div className='h3'>
                <input placeholder="Подтвердите пароль"
                       onBlur={e => hoverCheck(e)}
                       name="repass"
                       className="text-field__input"
                ></input>
                <label className="text-field__label">Подтвердите пароль</label>

            </div>
            <div className='Error'>{Error}</div>
            <button disabled={!formValid}
                    onClick={() => changeLogin()}
            >Зарегистрироваться
            </button>
            <NavLink to='/'>На главную</NavLink>
        </div>
    );
}

export default Reg;