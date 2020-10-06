import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {Header, RepositoryInfo, Issues} from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams{
  repository: string;
}
const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>();

return(
  <>
  <Header>
    <img src={logoImg} alt="GitHub Explorer"/>
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
  </Header>
  <RepositoryInfo>
    <header>
      <img src="https://avatars1.githubusercontent.com/u/44214927?v=4" alt="Mateus Ferreira"/>
      <div>
        <strong>mateussmaciel/github-explorer</strong>
        <p>GitHub Explorer</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>1808</strong>
        <span>stars</span>
      </li>
      <li>
        <strong>48</strong>
        <span>forks</span>
      </li>
      <li>
        <strong>67</strong>
        <span>issues abertas</span>
      </li>
    </ul>
  </RepositoryInfo>

  <Issues>
    <Link to="ola">
      <div>
        <strong>repository.full_name</strong>
          <p>repository.description</p>
          </div>
          <FiChevronRight size={20}/>
    </Link>
  </Issues>
  </>
);
}

export default Repository;
