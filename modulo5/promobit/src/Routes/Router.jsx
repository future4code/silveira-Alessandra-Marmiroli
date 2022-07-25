import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "../Pages/Movie";
import DetailMovie from "../Pages/MovieDetail";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={< Movie />} />
        <Route path="/detalheDosFilmes/:filmes" element={< DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
//Criando as rotas das páginas
