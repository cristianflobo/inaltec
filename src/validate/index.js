const validate = (dataForm) => {
  let number = /^[0-9]+$/;
  if (number.test(parseInt(dataForm.id)) === false) {
    alert("escribir numeros enteros");
    return false;
  } else {
    if (dataForm.Descripcion.length < 1) {
      alert("Escribir descripcion");
      return false;
    }
  }
  return true;
};

export { validate };
