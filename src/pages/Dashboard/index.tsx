import React from 'react';
import logoImg from '../../assets/logo.svg';
import {FiChevronRight} from 'react-icons/fi';

import {Title, Form, Repositories} from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt = "GitHub Explorer"/>
      <Title>
        Explore repositórios no GitHub
      </Title>
      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/44214927?s=460&u=eb9fa1d2f0a586a1ad4fc990206d9276409528e1&v=4"
           alt="Mateus Ferreira"/>
          <div>
            <strong>mateusmaciel/github-explorer</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/44214927?s=460&u=eb9fa1d2f0a586a1ad4fc990206d9276409528e1&v=4"
           alt="Mateus Ferreira"/>
          <div>
            <strong>mateusmaciel/github-explorer</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/44214927?s=460&u=eb9fa1d2f0a586a1ad4fc990206d9276409528e1&v=4"
           alt="Mateus Ferreira"/>
          <div>
            <strong>mateusmaciel/github-explorer</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/44214927?s=460&u=eb9fa1d2f0a586a1ad4fc990206d9276409528e1&v=4"
           alt="Mateus Ferreira"/>
          <div>
            <strong>mateusmaciel/github-explorer</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        
      </Repositories>
    </>
  );
}

export default Dashboard;
