import React from 'react';

import { Container, Time } from './styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Dashboard() {
  return (
    <Container >
      <header>
        <button type="button">
          <MdChevronLeft size={36} color='#fff' />
        </button>
        <strong>15 de setembro</strong>
        <button type="button">
          <MdChevronRight size={36} color='#fff' />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Eduardo Sutil</span>
        </Time>
        <Time available >
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time >
          <strong>10:00</strong>
          <span>Roberdo</span>
        </Time>
        <Time  >
          <strong>11:00</strong>
          <span>Lucas</span>
        </Time>
      </ul>
    </Container>
  );
}
