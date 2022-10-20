
var pizzitas = [
    {
        id: 1,
        nombre:"pizza de Muzza",
        ingredientes:["Salsa de Tomate","Muzarella","Aceitunas"],
        precio:700,
    },

    {
        id:2,
        nombre:"pizza Calabresa",
        ingredientes:["Salsa de Tomate","Muzarella","Rodajas de Salame","Aceitunas"],
        precio:850,
    },
    
    {
        id:3,
        nombre:"pizza a la napolitana",
        ingredientes:["Salsa de Tomate","muzarella","Rodajas de tomate","Oregano"],
        precio:800,
    },

    {
        id:4,
        nombre:"pizza de jamon y huevo",
        ingredientes:["Salsa de Tomate","Muzarella","Fetas de jamon","Huevo picado","Aceitunas"],
        precio:900,
    },

    {
        id:5,
        nombre:"pizza rellena",
        ingredientes:["Salsa de Tomate","Muzarella","Jamon trozado","oregano","tomate trozado"],
        precio:1200,
    },

    {
        id:6,
        nombre:"pizza ultra rellena",
        ingredientes:["Salsa de Tomate","Muzarella","Jamon trozado","Tomate trozado","Panceta trozada","Choclo","Oregano","Aceitunas rellenas"],
        precio:1500,
    }
]
//a)
pizzitas.forEach((pizzitas) => {
    if (pizzitas.id % 2 !== 0) {
      console.log(`La ${pizzitas.nombre} tiene un id impar`);
    }
  });
//b)
if (pizzitas.precio > 600) {
    console.log (`Hay pizzas por menos de 600 pesos.`)
} else {
    console.log(`No hay pizzas por menos de 600 pesos.`)
}
//c)
pizzitas.forEach((pizzitas)=>
console.log(`Nuesta pizza ${pizzitas.nombre} cuesta ${pizzitas.precio} pesos.`)
);
//d)
pizzitas.forEach((pizzitas)=> {
console.log(`Nuesta pizza ${pizzitas.nombre} tiene los siguientes ingredientes:`);
pizzitas.ingredientes.forEach((ingredientes) => console.log(ingredientes))
});
