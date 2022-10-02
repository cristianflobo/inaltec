import React from 'react'

const Item = ({ item, dobleclic, eliminar }) => {
  return (
    <div
      id={item.id}
      style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
      onDoubleClick={() => dobleclic(item.id)}
    >
      <div style={{ marginRight: -15, width: "10%" }}>
        <button
          key={item.id}
          value={item.id}
          onClick={() => eliminar(item.id)}
          style={{ width: 30, height: 20, fontSize: 12 }}
        >
          -
        </button>
      </div>
      <a
        value={item.id}
        style={{ width: "20%", display: "flex", justifyContent: "center" }}
      >
        {item.id}
      </a>
      <a
        value={item.id}
        style={{ width: "50%", display: "flex", justifyContent: "center" }}
      >
        {item.descripcion}
      </a>
      <a
        value={item.id}
        style={{ width: "70%", display: "flex", justifyContent: "center" }}
      >
        {item.fechaRegistro}
      </a>
    </div>
  );
};

export default Item;