import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const NavStyledContainer = styled(StyledContainer)`
  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 28px;
  }
`;

export const StyledNavBox = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    color: ${({ theme }) => theme.backgrounds.activeNavBtn};
    border-radius: 3px;
  }
  & svg {
    fill: currentColor;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledNavText = styled.span`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 18px;
  margin-left: 20px;
`;
