import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Container, Section } from './styles';

export default function Logon() {
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <form action="">
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </Link>
        </form>
      </Section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
