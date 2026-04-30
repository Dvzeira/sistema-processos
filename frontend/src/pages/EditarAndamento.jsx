import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditarAndamento() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  // 🔵 carregar andamento
  useEffect(() => {
    async function carregarAndamento() {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/andamentos/${id}`);

        console.log("RESPOSTA:", res.data); // debug

        setData(res.data.data);
        setDescricao(res.data.descricao);

      } catch (error) {
        console.log("Erro ao carregar andamento:", error);
      }
    }

    carregarAndamento();
  }, [id]);

  // 🟡 atualizar andamento
  async function handleUpdate(e) {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/andamentos/${id}`, {
        data,
        descricao
      });

      alert("Andamento atualizado!");
      navigate("/andamentos");

    } catch (error) {
      console.log("Erro ao atualizar:", error);
    }
  }

  return (
    <div className="container">
      <h1>Editar Andamento</h1>

      
      <form onSubmit={handleUpdate}>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button className="btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditarAndamento;