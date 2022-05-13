import { TextField } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";

const FeedForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, onChange, clear] = useForm({ title: "", description: "" });

  const creatCommentsFeed = () => {
    axios
      .post(`${BASE_URL}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res))
    //   alert (res.data.message)
    //   clear()
      alert ("Post criado com sucesso!")
      .catch((err) => console.log(err));
      alert(err.response.message)
      alert("Erro, tente novamente")
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    creatCommentsFeed();
    // clear();
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
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
          name={"description"}
          value={form.description}
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
      </form>
    </InputsContainer>
  );
};

export default creatCommentsFeed;
