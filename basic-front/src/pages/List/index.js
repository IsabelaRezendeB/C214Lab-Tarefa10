import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

import ClientUsers from "../../services/user.js";

import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";

import "./style.css";

export default function List() {
  const [users, setUsers] = useState([]);

  async function handleGet(e) {
    e.preventDefault();

    const update = await ClientUsers.getUsers();
    if (update.status === 200) {
      toast.success("Lista recebida com sucesso!");
        setUsers(update.data);
    } else {
      toast.error("Ops algo deu errado!");
    }
  }

  return (
    <div>
      <Sidebar />

      <div className="content">
        <Title name="Listar usuários">
          <FaUsers size={30} />
        </Title>
        <div className="container">
        <form className="form-profile" onSubmit={handleGet}>
            <button type="submit">Listar</button>
            <table>
              <tbody>
              {users.map(n => (
                <tr key={n.id}>
                  <td>{n.nome}</td>
                  <td>{n.email}</td>
                </tr>
              ))}
              </tbody>
            </table>
        </form>
        </div>
      </div>
    </div>
  );
}
