"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/retornaName", (request, response) => {
    response.status(200).send("Meu primeiro endpoint!");
});
const dadosDoUsuario = [
    { id: 1, name: "Rogério", phone: 9999 - 9999, email: "roger@email.com", website: "wwww.casamento.com.br" },
    { id: 2, name: "Maria Eduarda", phone: 9999 - 9999, email: "maria@email.com", website: "wwww.beleza.com.br" },
    { id: 3, name: "Alessandra", phone: 9999 - 9999, email: "alessandra@email.com", website: "wwww.beleza.com.br" },
    { id: 4, name: "Heloísa", phone: 9999 - 9999, email: "heloísa@email.com", website: "wwww.doçura.com.br" },
    { id: 5, name: "Henrique", phone: 9999 - 9999, email: "henrique@email.com", website: "wwww.estilo.com.br" },
];
app.get("/usuarios", (request, response) => {
    response.status(200).send({ message: dadosDoUsuario });
});
const postdDUsers = [
    { id: 1, title: "Viagem para Itália", body: "O lugar onde a gastronomia te envolve com sabores.", userId: 1 },
    { id: 2, title: "Viagem para Maldivas", body: "O lugar onde estão os melhores hotéis de relaxamento.", userId: 2 },
    { id: 3, title: "Viagem para Minas", body: "O lugar onde estão as melhores cachaças e queijos.", userId: 3 },
    { id: 4, title: "Viagem para Rio Janeiro", body: "O lugar onde estão as praias mais incríveis.", userId: 4 },
    { id: 5, title: "Viagem para Rio Mato Grosso", body: "O lugar onde estão as cachoeiras mais lindas.", userId: 5 },
];
app.get("/postUsers/:id", (request, response) => {
    const idPessoa = Number(request.params.id);
    const retornaUmPost = postdDUsers.filter((post) => {
        if (post.id === idPessoa) {
            return post;
        }
    });
    response.status(200).send({ message: retornaUmPost });
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map