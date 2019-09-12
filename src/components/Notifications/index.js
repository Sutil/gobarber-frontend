import React from 'react';
import { MdNotifications } from 'react-icons/md'
import colors from '~/styles/colors';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container >
      <Badge hasUnread>
        <MdNotifications color={colors.primary} size={20} />
      </Badge>
        <NotificationList>
          <Scroll>
            <Notification unread>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification unread>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification unread>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>novo agendamento</p>
              <time>há 1 dia e 5 hoas</time>
              <button type="button">Marcar como lida</button>
            </Notification>
          </Scroll>
        </NotificationList>
    </Container>
  );
}
