export const sumTwo = (a: number, b: number) => {
  return a + b;
};

export const pago_entrada=(pago:number)=>{
  let valorEntrada=100;
  if (valorEntrada<pago){
    return true
  } else {
    return false
  }
}

export const obtenerUsuario = () => {
  return { nombre: "Axel", edad: 19 };
};

export const obtenerFrutas = () => ['naranja', "manzana", "pera", "plátano"];
