import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "../ThemeManager";
import * as themeConf from "../theme";
import { NavLink } from "react-router-dom";

export default function Nav(): React.ReactElement {
  const theme = useTheme();

  const Navbar = styled.nav`
    background: ${themeConf.backgroundColor};
    border-bottom: 1px solid ${themeConf.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${themeConf.navHeight};
    padding: 0 ${themeConf.navPadding};
  `;

  const Button = styled.button`
    background: ${themeConf.buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    color: ${themeConf.buttonTextColor};
    cursor: pointer;
    font-size: 0.5em;
    padding: 0.5em 1em;
  `;

  const NavbarBrand = styled.div`
    flex: 1;
    text-align: left;
    > a {
      color: ${themeConf.textColor};
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2em;
    }
  `;

  const NavbarCollapse = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  const NavbarItem = styled(NavLink)`
    text-decoration: none;
    color: ${themeConf.textColor};
    display: block;
    margin-left: 1em;
  `;

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Navbar>
        <NavbarBrand>
          <NavbarItem to="/"> Pelis</NavbarItem>
        </NavbarBrand>
        <NavbarCollapse>
          <li>
            <Button onClick={() => theme.toggle()}>
              {theme.mode === "dark" ? (
                <span role="img">🌞</span>
              ) : (
                <span role="img">🌜</span>
              )}
            </Button>
          </li>
          <li>
            <NavbarItem to="/about">About</NavbarItem>
          </li>
          <li>
            <NavbarItem to="/contact">Contact</NavbarItem>
          </li>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}
