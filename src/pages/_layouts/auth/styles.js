import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #49265c, ${lighten(0.3, '#49265c')});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0,0,0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255,255,255, 0.7);
      }
    }

    span {
      color: ${colors.error};
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px;
      height: 44px;
      background: ${colors.secondary};
      color: white;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${colors.secondaryLight};
      }
    }

    a {
      color: #fff;
      font-size: 16px;
      opacity: 0.8;

      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

    }

  }
`;
