import styled, { css } from 'styled-components';
import colors from '~/styles/colors';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${props => props.hasUnread && css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.secondary};
    }
  `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0,0,0,.6);
  padding: 15px 5px;
  border-radius: 4px;
  display: ${props => props.visible ? 'block' : 'none'};

  &&::before {
    content: '';
    position: absolute;
    top: -20px;
    left: calc(50% - 20px);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0,0,0,.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: solid 1px rgba(255,255,255, .1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin: 10px 0;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${colors.primaryLight};
  }

  ${props => props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: ${colors.secondary};
        border-radius: 50%;
        margin-left: 10px
      }
  `}
`;

