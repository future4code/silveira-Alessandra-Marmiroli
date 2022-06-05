import {
  Button,
  Input,
  TextareaAutosize,
  TextField,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import styled from "styled-components";
import { ButtonB, Form } from "./styled";

const FeedForm = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const creatCommentsFeed = () => {
    axios
      .post(`${BASE_URL}posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log();
        clear();
        alert("Post adicionado com sucesso!");
      })
      .catch((err) => {
        console.log();
        clear();
        alert("Erro, tente novamente");
      });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    creatCommentsFeed();
    clear();
  };

  return (
    <div>
      <Typography color={"primary"}  variant={"overline"}>
        Crie aqui seu Comentário!
      </Typography>
      <Form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título"}
          variant={"outlined"}
          fullWidth
          required
          autoFocus
          margin={"normal"}
        />
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label={"Descrição"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <Button
          type="submit"
          variant={"contained"}
          align={"center"}
          color={"primary"}
          fullWidth
        >
          Adicionar Comentário
        </Button>
      </Form>
    </div>
  );
};

export default FeedForm;
