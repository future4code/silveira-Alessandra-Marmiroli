"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/test", (request, response) => {
    response.status(200).send("Testando a API!");
});
app.post("/criaProduto", (req, res) => {
    const authorization = req.headers.authorization;
    const namePostman = String(req.body.name);
    const pricePostman = Number(req.body.price);
    const criandoProduto = { id: Date.now().toString(), name: namePostman, price: pricePostman };
    data_1.products.push(criandoProduto);
    console.table(criandoProduto);
    res.status(200).send(data_1.products);
});
app.get("/retornaProdutos", (request, response) => {
    response.status(200).send(data_1.products);
});
app.put("/editaPreco/:id", (req, res) => {
    const id = req.params.id;
    const price = req.body.price;
    const findProduct = data_1.products.find((product) => {
        return product.id === id;
    });
    if (!findProduct) {
        throw new Error("Produto não encontrado");
    }
    findProduct.price = price;
    res.status(200).send(data_1.products);
});
app.delete("/deletaProduto/:id", (request, response) => {
    const id = String(request.params.id);
    const deleteProduct = data_1.products.filter((product) => {
        if (product.id !== id) {
            return product;
        }
    });
    response.status(200).send({ deleteProduct });
});
app.post("/criaProduto2", (req, res) => {
    const authorization = req.headers.authorization;
    const namePostman = String(req.body.name);
    const pricePostman = Number(req.body.price);
    const criandoProduto = { id: Date.now().toString(), name: namePostman, price: pricePostman };
    data_1.products.push(criandoProduto);
    if (namePostman !== "string" && pricePostman <= 0) {
        res.status(400).send("Insira uma string e um numero acima de 0");
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map