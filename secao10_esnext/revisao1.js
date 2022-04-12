// let e const

{
  let a = 1;
  console.log(a);
}

const b = 2;
console.log(b);

// Template string

const prod = "iPad";
console.log(`é 
um 
${prod}`);

const [l, e, ...tras] = "Punika";
console.log(l, e, tras);

const [x, y] = [3, 4, 5];
console.log(x, y);

const {idade: i, nome} = {nome: "Nia", idade: 20}
console.log(nome, i);
