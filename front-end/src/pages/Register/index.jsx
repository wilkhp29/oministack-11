import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './style.scss';
import logoImage from '../../assets/img/logo.svg';

import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function HandleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        try {

            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');

        } catch (error) {
            alert(`Erro no cadastro, tente novamente!`);
        }

    }


    return (
        <div className="master-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={HandleRegister}>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name} placeholder="Nome da ONG" />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email} type="email" placeholder="Email" />
                    <input
                        onChange={e => setWhatsapp(e.target.value)}
                        value={whatsapp} placeholder="WhatsApp" />
                    <div className="input-group">
                        <input
                            onChange={e => setCity(e.target.value)}
                            value={city} type="text" placeholder="Cidade" />
                        <input
                            onChange={e => setUf(e.target.value)}
                            value={uf} type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}