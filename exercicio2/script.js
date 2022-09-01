const arrayNumero= [2,15,20,44,77]
const arrayStrings = ["mesa", "caneca", "prato", "faca"]
const arrayDiversos = [11, "caneta", true]

console.log(arrayNumero)
console.log(arrayStrings)
console.log(arrayDiversos)

console.log("Quantidade de itens:", arrayNumero.length)
console.log("Quantidade de itens:", arrayStrings.length)
console.log("Quantidade de itens:", arrayDiversos.length)

const arrayItemUm = arrayNumero[0]
console.log("Item um:", arrayItemUm)

const arrayItemDois = arrayStrings[1]
console.log("Item dois:", arrayItemDois)

const arrayItemTres = arrayDiversos[2]
console.log("Item três:", arrayItemTres)

console.log("Verdadeiro:",arrayNumero.includes(44))
console.log("falso:", arrayDiversos.includes("lapis"))


