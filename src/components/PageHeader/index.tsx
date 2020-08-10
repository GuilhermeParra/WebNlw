import React from 'react';

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './style.css'

// MUDA O TITULO DAS PAGINAS DIFERENTES COM O MESMO HEADER (PARAMETRO)
interface PageHeaderProps{
    title: string;
    //? - nao obrigatorio
    description?: string;
};

const PageHeader: React.FC<PageHeaderProps> =  (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>

                    <img src={logoImg} alt="Logo Proffy"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}

                    {props.children}
                </div>

                
            </header>
    );
}

export default PageHeader;