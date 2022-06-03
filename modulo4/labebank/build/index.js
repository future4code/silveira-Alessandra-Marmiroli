"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const type_1 = require("./data/type");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/users", (req, res) => {
    let codeError = 400;
    const dataDeNascimento = req.params.dataDeNascimento;
    try {
        const { name, cpf, dataDeNascimento, saldoExtrato, movimentacao } = req.body;
        if (!name || !cpf || !dataDeNascimento || !saldoExtrato || !movimentacao) {
            let errorCode = 422;
            throw new Error('Por favor verifique se os campos foram preenchidos corretamente');
        }
        const filtrando = type_1.usersBank.filter((user) => {
            if (user.dataDeNascimento === dataDeNascimento) {
                return user;
            }
        });
        const novosUsuarios = {
            name,
            cpf,
            dataDeNascimento,
            saldoExtrato,
            movimentacao,
        };
        type_1.usersBank.push(novosUsuarios);
        res.status(201).send({ message: "Usuário criado com Sucesso" });
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
app.get("/users", (req, res) => {
    let codeError = 400;
    try {
        if (type_1.usersBank) {
            res.status(200).send(type_1.usersBank);
        }
        else {
            codeError = 404;
            throw new Error('Lista de usuário não encontrada');
        }
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map