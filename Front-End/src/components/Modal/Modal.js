import React from "react";
import "./Modal.css"

function Modal ({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Bem vindo!</h1>
        </div>
        <div className="body">
          <h2>Você é maior de 18 anos? <br /></h2>
          <button onClick={() => closeModal(false)}>Sim</button>
          <button id="cancelBtn">Não</button>
        </div>
        <div className="footer">

          <p>Conteúdo para maiores de 18 anos. <br />
            A venda de bebidas alcoólicas é proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal;