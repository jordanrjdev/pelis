import { clienteAxios } from "../Config/axios";

interface IPelicula {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
}

type PeliculaState = {
  peliculas: IPelicula[];
  page: number;
  total_pages: number;
  total_results: number;
};

type TheMVDBResponse = {
  page: number;
  results: IPelicula[];
  total_results: number;
  total_pages: number;
};

type PeliculaAction = {
  type: string;
  peliculas: IPelicula[] | [];
  page: number;
  total_results: number;
  total_pages: number;
};

type DispatchType = (args: PeliculaAction) => PeliculaAction;

const dataInicial: PeliculaState = {
  peliculas: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
};

const OBTENER_PELICULAS = "OBTENER_PELICULAS";
const OBTENER_PELICULAS_ERROR = "OBTENER_PELICULAS_ERROR";

export default function reducer(
  state: PeliculaState = dataInicial,
  action: PeliculaAction
): PeliculaState {
  switch (action.type) {
    case OBTENER_PELICULAS:
      return {
        ...state,
        peliculas: action.peliculas,
        page: action.page,
        total_pages: action.total_pages,
        total_results: action.total_results,
      };
    case OBTENER_PELICULAS_ERROR:
      return {
        ...state,
        peliculas: [],
        page: 0,
        total_pages: 0,
        total_results: 0,
      };
    default:
      return state;
  }
}

export const obtenerPeliculas =
  (data: string) => async (dispatch: DispatchType) => {
    try {
      const response = await clienteAxios.get(
        `movie?api_key=${process.env.REACT_APP_API_KEY}&query=${data}`
      );
      const themoviedbData: TheMVDBResponse = response.data;
      dispatch({
        type: OBTENER_PELICULAS,
        peliculas: themoviedbData.results,
        page: themoviedbData.page,
        total_results: themoviedbData.total_results,
        total_pages: themoviedbData.total_pages,
      });
    } catch (error) {
      dispatch({
        type: OBTENER_PELICULAS_ERROR,
        peliculas: [],
        page: 0,
        total_pages: 0,
        total_results: 0,
      });
      console.log(error);
    }
  };
