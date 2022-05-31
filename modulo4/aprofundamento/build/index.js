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
app.get("/ping", (request, response) => {
    response.status(200).send("Pong!");
});
const titleUsers = [
    { userId: 1, id: 1, title: "Ir ao Mercado.", completed: false },
    { userId: 2, id: 2, title: "Comprar água.", completed: true },
    { userId: 3, id: 3, title: "Participar do Grupo de Evangelho no Lar.", completed: true },
    { userId: 4, id: 4, title: "Levar as crianças em festinha de aniversário.", completed: true },
    { userId: 5, id: 5, title: "Comprar lanche da semana para escola.", completed: false },
    { userId: 6, id: 6, title: "Fazer um projeto de react no final de semana.", completed: true },
    { userId: 7, id: 7, title: "Comprar carnes para semana", completed: false },
    { userId: 8, id: 8, title: "Doação de roupas", completed: true },
    { userId: 9, id: 9, title: "Finalizar livro Desbloqueie o poder da sua mente.", completed: true },
    { userId: 10, id: 10, title: "Comprar carnes para semana", completed: false },
];
app.get("/users", (request, response) => {
    const returnCompleted = titleUsers.filter((title) => {
        if (title.completed === true)
            return title;
    });
    response.status(200).send(returnCompleted);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map