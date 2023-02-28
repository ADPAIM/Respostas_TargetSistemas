const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53

let soma = SP + RJ + MG + ES + Outros

let SPperc = (1/(soma/SP))*100
let RJperc = (1/(soma/RJ))*100
let MGperc = (1/(soma/MG))*100
let ESperc = (1/(soma/ES))*100
let Outrosperc = (1/(soma/Outros))*100

console.log("SP corresponde a " + SPperc.toFixed(2) + "%")
console.log("RJ corresponde a " + RJperc.toFixed(2) + "%")
console.log("MG corresponde a " + MGperc.toFixed(2) + "%")
console.log("ES corresponde a " + ESperc.toFixed(2) + "%")
console.log("Outros corresponde a " + Outrosperc.toFixed(2) + "%")
