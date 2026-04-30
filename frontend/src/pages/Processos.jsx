import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Processos() {
  const navigate = useNavigate();
  const [numero, setNumero] = useState("");
  const [cliente, setCliente] = useState("");
  const [uf, setUf] = useState("");
  const [processos, setProcessos] = useState([]);
  const [erroUf, setErroUf] = useState("");

  async function carregarProcessos() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/processos");
      setProcessos(response.data);
    } catch (error) {
      console.log("Erro ao buscar processos:", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    carregarProcessos();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/processos", {
        numero,
        cliente,
        uf,
        data_abertura: "2026-04-29",
        descricao: "Criado pelo React",
        advogado: "Teste"
      });

      alert(response.data.msg);

      setNumero("");
      setCliente("");
      setUf("");

      carregarProcessos();
    } catch (error) {
      console.log("Erro ao criar processo:", error);
    }
  }


    function handleEdit(id) {
         navigate(`/processos/editar/${id}`);
    }

    async function handleDelete(id) {
        try {
        const confirmar = window.confirm("Tem certeza que deseja excluir este Processo?");

        if (!confirmar) return;
        await axios.delete(`http://127.0.0.1:8000/api/processos/${id}`);
        alert("Processo excluído!");
        carregarProcessos();
       }catch (error) {
          console.log("Erro ao excluir:", error);
       }
    }

  return (
    <div className="container">
      <h1>Sistema de Processos</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />

        <input
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />

       <input
         placeholder="UF"
         value={uf}
         onChange={(e) => {
         const valor = e.target.value.toUpperCase();

        if (valor.length > 2) {
              setErroUf("UF deve ter no máximo 2 caracteres");
        } else {
            setErroUf("");
              setUf(valor);
            }
          }}
         required
        />
        {erroUf && <p className="erro">{erroUf}</p>}

        <button className="btn-primary" type="submit">Criar Processo</button>
      </form>

      <hr />

      <h2>Processos</h2>

      {processos.map((p) => (
        <div className="container_select">
            <p><strong>Número:</strong> {p.numero}</p>
            <p><strong>Cliente:</strong> {p.cliente}</p>
            <p><strong>UF:</strong> {p.uf}</p>

            {/* BOTÕES */}
            <button className="btn-warning" onClick={() => handleEdit(p.id)}>
            Editar
            </button>

            <button className="btn-danger" onClick={() => handleDelete(p.id)}>
            Excluir
            </button>

         </div>
    ))}
    </div>
  );
}

export default Processos;