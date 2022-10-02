import React, { useEffect, useState } from "react";
import "./information.css";
import { validate } from "../../validate/index.js";
import { axiosPost } from "../query";

const Informacion = ({ dobleClick, setdobleClick, dataAxios }) => {
  const [dataForm, setdataForm] = useState({ id: "", Descripcion: "" });
  const [disableComponet, setdisableComponet] = useState(true);
  const onchange = (e) => {
    setdataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (dobleClick.edit) {
      setdataForm({
        id: dobleClick.data.id,
        Descripcion: dobleClick.data.descripcion,
      });
    }
    dataAxios();
  }, [dobleClick]);

  const onclick = async ({ id, Descripcion }) => {
    if (dobleClick.edit) {
      if (!validate({ id, Descripcion })) return;
      await axiosPost("Modificar", { id, Descripcion });
      setdisableComponet(false);
      setdobleClick({
        ...dobleClick,
        edit: false,
      });
    } else {
      let validateFlag = validate(dataForm);
      if (validateFlag) {
        const addExitosa = await axiosPost("Adicionar", { id, Descripcion });
        if (addExitosa.operacionExitosa) {
          dataAxios();
          alert("El registro fue almacenado correctamente");
          setdisableComponet(false);
        } else {
          alert(addExitosa.mensaje);

          return;
        }
      }
      if (!validateFlag) return;
    }
    setdataForm({ id: "", Descripcion: "" });
  };

  return (
    <div>
      <div className="derecha">
        <div className="derecha2">
          {disableComponet ? (
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <a>Registro Aeronaves</a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 30,
                }}
              >
                <a style={{ width: "30%" }}>Id</a>
                <input
                  disabled={dobleClick.edit}
                  name="id"
                  value={dataForm.id}
                  onChange={(e) => onchange(e)}
                  style={{ height: 25, width: "50%" }}
                  type="text"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 15,
                }}
              >
                <a style={{ width: "30%" }}>Descripcion</a>
                <textarea
                  value={dataForm.Descripcion}
                  name="Descripcion"
                  onChange={(e) => onchange(e)}
                  style={{ width: "50%" }}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div style={{ width: "24%" }}>
                  <button
                    onClick={() => onclick(dataForm)}
                    style={{
                      width: 70,
                      backgroundColor: "#f9c499",
                      border: "none",
                      borderRadius: 3,
                      height: 25,
                    }}
                  >
                    guardar
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {/* <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <a>Registro Aeronaves</a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: 30,
            }}
          >
            <a style={{ width: "30%" }}>Id</a>
            <input
              disabled={dobleClick.edit}
              name="id"
              value={dataForm.id}
              onChange={(e) => onchange(e)}
              style={{ height: 25, width: "50%" }}
              type="text"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: 15,
            }}
          >
            <a style={{ width: "30%" }}>Descripcion</a>
            <textarea
              value={dataForm.Descripcion}
              name="Descripcion"
              onChange={(e) => onchange(e)}
              style={{ width: "50%" }}
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div style={{ width: "24%" }}>
              <button
                onClick={() => onclick(dataForm)}
                style={{
                  width: 70,
                  backgroundColor: "#f9c499",
                  border: "none",
                  borderRadius: 3,
                  height: 25,
                }}
              >
                guardar
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Informacion;
