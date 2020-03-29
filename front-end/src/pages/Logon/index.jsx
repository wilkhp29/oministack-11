import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './styles.scss'
import { FiLogIn } from 'react-icons/fi';

import herosImage from '../../assets/img/heroes.png';
import logoImage from '../../assets/img/logo.svg';

import api from '../../services/api';

export default function Logon() {

const [id, setId] = useState('');
const history = useHistory();
 async function handleLogin(e) {
    e.preventDefault();

    try {
        const response = await api.post('sessions', { id });

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');

    } catch (error) {
        alert('Erro, tente novamente!');
    }

 }


    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImage} alt="be the hero"/>
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input type="text" placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
                <button className="button" type="submit">Entrar</button>
                <Link className="link" to="/register">
                
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro</Link>
            </form>
            </section>
            <img src={herosImage} alt="heros"/>
        </div>
    )
}