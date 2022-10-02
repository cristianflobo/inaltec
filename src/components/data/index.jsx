import Informacion from "../information";
import useData from "../../hooks/useData";
import Header from "../Header";
import Item from "../Item";
import "./data.css";

const Data = () => {
  const {
    componenteInformacion,
    dataState,
    dobleClick,
    eliminar,
    dobleclic,
    componetForm,
    setdobleClick,
    dataAxios,
  } = useData();

  return (
    <div style={{ display: "flex", backgroundColor: "#283039" }}>
      <div className="izquierda">
        <div className="lista">
          <Header
            componetForm={componetForm}
            componenteInformacion={componenteInformacion}
          />
          <div>
            {dataState &&
              dataState.map((item) => {
                return (
                  <Item item={item} dobleclic={dobleclic} eliminar={eliminar} />
                );
              })}
          </div>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        {componenteInformacion === "+" ? null : (
          <Informacion
            dobleClick={dobleClick}
            setdobleClick={setdobleClick}
            dataAxios={dataAxios}
          />
        )}
      </div>
    </div>
  );
};

export default Data;
