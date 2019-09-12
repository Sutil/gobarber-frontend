import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#49265c, ${lighten(0.3, '#49265c')});
`;
