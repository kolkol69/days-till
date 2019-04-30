import styled from 'styled-components';

export const StyledNavigation = styled.nav`
display: flex;
justify-content: space-around;
padding-top: 1rem;

a {
  position: relative;
  font-size: ${props => props.theme.fs1};
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.primaryColorLight};

  &.active {
    color: ${props => props.theme.primaryYellow};
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    content: '';
    background: ${props => props.theme.primaryYellow};
    transform: scaleX(0);
    transition: transform 0.25s linear;
  }

  &:hover::before,
  &:focus::before {
    visibility: visible;
    transform: scaleX(1);
  }
}
`;
