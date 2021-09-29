import { Title } from "../StyleComponents/Title";
import { useTheme } from "../ThemeManager";
import * as themeConf from "../theme";
import styled, { ThemeProvider } from "styled-components";

export default function Home(): JSX.Element {
  const theme = useTheme();
  const Input = styled.input`
    width: 100%;
    background: ${themeConf.inputBackgroundColor};
    color: ${themeConf.textColor};
    padding: 12px 20px;
    border: none;
    display: block;
    border-radius: 4px;
    margin-top: 15px;
  `;
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <div>
        <Title>Bienvenido a Pelis</Title>
        <small>Aqui podrás encontrar tus peliculas favoritas</small>
        <Input type="text" placeholder="Buscar..." />
      </div>
    </ThemeProvider>
  );
}
