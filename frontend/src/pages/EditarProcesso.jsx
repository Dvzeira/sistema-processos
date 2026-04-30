import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditarProcesso() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [numero, setNumero] = useState("");
  const [cliente, setCliente] = useState("");
  const [uf, setUf] = useState("");

  // CARREGAR DADOS
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/processos/${id}`)
      .then((res) => {
        setNumero(res.data.numero);
        setCliente(res.data.cliente);
        setUf(res.data.uf);
      });
  }, [id]);

  // ATUALIZAR
  async function handleUpdate(e) {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/processos/${id}`, {
        numero,
        cliente,
        uf
      });

      alert("Processo atualizado!");
      navigate("/");
    } catch (error) {
      console.log("Erro ao atualizar:", error);
    }
  }

  return (
    <form onSubmit={handleUpdate}>
      <h1>Editar Processo</h1>

      <input value={numero} onChange={(e) => setNumero(e.target.value)} />
      <input value={cliente} onChange={(e) => setCliente(e.target.value)} />
      <input value={uf} onChange={(e) => setUf(e.target.value)} />

      <button className="btn-primary" type="submit">Salvar</button>
    </form>
  );
}

export default EditarProcesso;