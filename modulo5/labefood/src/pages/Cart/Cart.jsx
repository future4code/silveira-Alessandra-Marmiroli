import { Typography } from "@mui/material";
import React from "react";
import { BoxAddress, Form, Frete, Line, Pay, ScreenContainer, Subtotal, SubValor } from "./styled";

export default function Cart() {
  return (
    <ScreenContainer>
      <Typography
        sx={{ color: "black", marginTop: "15px", fontWeight: "bold" }}
      >
        Meu Carrinho
      </Typography>
      <BoxAddress>
        <p>{}</p>
        <p>{}</p>
        <p>{}min</p>
      </BoxAddress>
      <Frete>Frete: R$ 0,00 </Frete>
      <Subtotal>
        SUBTOTAL
        {/* <SubValor> R$ {subtotal.toFixed(2)}</SubValor> */}
      </Subtotal>
      <Pay>Forma de Pagamento</Pay>
      <Line />
      <br></br>
      <Form>
        <form
          action="/action_page.php"
          onChange={""}
        >
          <input type="radio" id="din" name="pagamento" value="money" />
          <label for="din">Dinheiro</label>
          <br></br>
          <input type="radio" id="css" name="pagamento" value="creditcard" />
          <label for="cartao">Cartão de Crédito</label>
        </form>
      </Form>
    </ScreenContainer>
  );
}
