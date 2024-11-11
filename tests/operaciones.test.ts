import {sumTwo, pago_entrada, obtenerUsuario, obtenerFrutas} from "../src/app"

// .toBe(value): verifica que el valor sea exactamente igual (por referencia para objetos).
it("la suma debe dar 100", ()=>{
    expect(sumTwo(99, 1)).toBe(100)
})

// .toEqual(value): verifica que el valor sea igual (por valor, adecuado para objetos o arrays).
it("debe retornar el mismo usuario", () => {
    const usuarioEsperado = { nombre: "Axel", edad: 19 };
    expect(obtenerUsuario()).toEqual(usuarioEsperado);
});

// .toBeGreaterThan(value): verifica que el valor sea mayor que el valor dado.
it("la suma debe dar positivo", ()=>{
    expect(sumTwo(1, 100)).toBeGreaterThan(0)
})

// .toBeTruthy(): verifica que el valor sea "verdadero" (truthy).
it ("$1000 la entrada", ()=>{
    expect (pago_entrada(1000)).toBeTruthy()
})

// verifica la longitud de un array, string o cualquier estructura que tenga una propiedad length.
it("debería tener una longitud de 3", () => {
  expect(obtenerFrutas()).toHaveLength(4);
});

// .toContain() verifica si un array o string contiene un valor específicos
it ("Debe contener la fruta que yo elija", ()=>{
    expect (obtenerFrutas()).toContain("naranja")
})

//.toBeDefined() verifica que una variable o propiedad no sea undefined
it("debería tener una propiedad 'edad' definida", () => {
    expect(obtenerUsuario().nombre).toBeDefined();
});