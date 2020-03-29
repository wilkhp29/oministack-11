import React,  {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.scss';
import logoImage from '../../assets/img/logo.svg';

export default function NewIncident() {
    
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            
            await api.post('incident', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile');

        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente!')
        }
    }


    return (
        <div className="master-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="be the hero" />
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="link" to="/profile">

                        <FiArrowLeft size={16} color="#E02041" />
               Voltar para Home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)} placeholder="Titulo do Caso" />
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)} placeholder="Descrição"></textarea>
                    <input 
                        value={value}
                        onChange={e => setValue(e.target.value)} placeholder="valor em reais" />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}