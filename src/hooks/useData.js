import { useEffect, useState } from "react";
import { axiosPost } from "../components/query";
import axios from "axios";
import { validate } from "../validate";

const useData = () => {
  const [componenteInformacion, setComponenteInformacion] = useState("+");
  const [dataState, setdataState] = useState("");
  const [dobleClick, setdobleClick] = useState({ data: "", edit: false });
  const [dataForm, setdataForm] = useState({ id: "", Descripcion: "" });

  useEffect(() => {
    dataAxios();
  }, []);

  const dataAxios = async () => {
    try {
      const data = await axios.get("Lista");
      console.log(data.data);
      setdataState(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminar = async (id) => {
    const deleteData = dataState.find((item) => item.id == id);
    let confirmAction = window.confirm("Desea eliminar?");
    if (confirmAction) {
      const retirar = await axiosPost("Retirar", {
        id: deleteData.id,
        descripcion: deleteData.descripcion,
      });
      if (retirar.operacionExitosa) {
        dataAxios();
      }
    } else {
      return;
    }
  };

  const dobleclic = (id) => {
    const updateData = dataState.find((item) => item.id == id);
    if (componenteInformacion === "+") {
      componetForm();
    }
    setdobleClick({
      ...dobleClick,
      data: updateData,
      edit: true,
    });
  };

  const componetForm = () => {
    if (componenteInformacion === "+") {
      setComponenteInformacion("-");
    } else {
      setComponenteInformacion("+");
    }
  };

  return {
    componenteInformacion,
    dataState,
    dobleClick,
    eliminar,
    dobleclic,
    componetForm,
    setdobleClick,
    dataAxios,
    onchange,
    onclick,
    dataForm,
    setdataForm,
  };
};

export default useData;
