const objs = [
    {

        "nome": "arena mrv",
        "publico_recorde": 13.000,
        "capacidade": null
    },
    {
        "nome": "Everson",
        "idade": 37,
        "titular": true,
        "time":["atletico Mg", "america", "psg"]
    },
    {
        "nome": "Everson",
        "idade": 37,
        "titular": true,
        "time":["atletico Mg", "america", "psg"]
    },
]
console.log(objs)

//converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)