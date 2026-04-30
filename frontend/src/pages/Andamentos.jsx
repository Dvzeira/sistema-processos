import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Andamentos() {
  const [processos, setProcessos] = useState([]);
  const [processoId, setProcessoId] = useState("");
  const [andamentos, setAndamentos] = useState([]);

  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  //carregar processos
  async function carregarProcessos() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/processos");
      setProcessos(res.data);
    } catch (error) {
      console.log("Erro ao buscar processos:", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    carregarProcessos();
  }, []);

  //carregar andamentos do processo
  async function carregarAndamentos(id) {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/processos/${id}`);
      setAndamentos(res.data.andamentos || []);
    } catch (error) {
      console.log("Erro ao buscar andamentos:", error);
    }
  }

  //criar andamento
  async function criarAndamento(e) {
    e.preventDefault();

    if (!processoId) {
      alert("Selecione um processo");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/andamentos", {
        processo_id: processoId,
        data,
        descricao
      });

      alert("Andamento criado!");

      setData("");
      setDescricao("");

      carregarAndamentos(processoId);
    } catch (error) {
      console.log("Erro ao criar andamento:", error);
    }
  }

  //deletar andamento
  async function deletarAndamento(id) {
    try {
      const confirmar = window.confirm("Tem certeza que deseja excluir este andamento?");

      if (!confirmar) return;

      await axios.delete(`http://127.0.0.1:8000/api/andamentos/${id}`);
      carregarAndamentos(processoId);
      alert("Andamento Excluído com Sucesso")
    } catch (error) {
      console.log("Erro ao excluir andamento:", error);
    }
  }

  return (
    <div className="container">
      <h1>Andamentos</h1>

      {/* SELECT PROCESSO */}
      <select
        value={processoId}
        onChange={(e) => {
          const id = e.target.value;
          setProcessoId(id);
          carregarAndamentos(id);
        }}
      >
        <option value="">Selecione um processo</option>

        {processos.map((p) => (
          <option key={p.id} value={p.id}>
            {p.numero}
          </option>
        ))}
      </select>

      <hr />

      {/* FORMULÁRIO */}
      <form onSubmit={criarAndamento}>
        <h3>Novo Andamento</h3>

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <input
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <button className="btn-primary" type="submit">Adicionar</button>
      </form>

      <hr />

      {/* LISTA */}
      <h3>Lista de Andamentos</h3>

      {andamentos.length === 0 ? (
        <p>Nenhum andamento encontrado</p>
      ) : (
        andamentos.map((a) => (
          <div className="container_select">
            <p><strong>Data:</strong> {a.data}</p>
            <p><strong>Descrição:</strong> {a.descricao}</p>

            <button className="btn-warning" onClick={() => navigate(`/andamentos/editar/${a.id}`)}>
              Editar
            </button>

            <button className="btn-danger" onClick={() => deletarAndamento(a.id)}>
              Excluir
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Andamentos;