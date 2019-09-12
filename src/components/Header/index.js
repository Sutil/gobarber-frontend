import React from 'react'
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  Profile,
} from './styles';

import logo from '~/assets/logo-purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt=""/>
          <Link to="/dashboard" >DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Eduardo Sutil</strong>
              <Link to="/profile" >Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Eduardo Sutil"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
