import { Title } from "../StyleComponents/Title";
import * as themeConf from "../theme";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { obtenerPeliculas } from "../Redux/pelisDuck";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Input = styled.input`
  width: 100%;
  color: ${themeConf.textColor};
  background-color: transparent;
  border: none;
  display: block;
  border-radius: 4px;
  flex: 1;
`;

const Form = styled.form`
  background: ${themeConf.inputBackgroundColor};
  width: 100%;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 1em;
  justify-content: space-between;
`;

const Button = styled.button`
  background: ${themeConf.inputBackgroundColor};
  color: ${themeConf.textColor};
  border: none;
  cursor: pointer;
  display: block;
  padding: 0.5em;
  margin: 0;
`;

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(obtenerPeliculas(search));
  };

  return (
    <div>
      <Title>Bienvenido a Pelis</Title>
      <small>Aqui podrás encontrar tus peliculas favoritas</small>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Buscar..."
        />
        <Button type="submit">
          <FaSearch />
        </Button>
      </Form>
    </div>
  );
}
