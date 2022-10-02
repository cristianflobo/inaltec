import React from "react";

const Header = ({ componetForm, componenteInformacion }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <a style={{ width: "50%", display: "flex", justifyContent: "center" }}>
          Lista Aeronave
        </a>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <button
            style={{ marginRight: 50 }}
            className="botonmas"
            onClick={() => componetForm()}
          >
            {componenteInformacion}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          borderBottom: "1px solid",
          borderTop: "1px solid",
          padding: 10,
        }}
      >
        <a style={{ width: "30%", display: "flex", justifyContent: "center" }}>
          {" "}
          id{" "}
        </a>
        <a style={{ width: "50%", display: "flex", justifyContent: "center" }}>
          descripcion{" "}
        </a>
        <a style={{ width: "70%", display: "flex", justifyContent: "center" }}>
          Fecha de registro{" "}
        </a>
      </div>
    </>
  );
};

export default Header;
