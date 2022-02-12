const decimalToBinary = (ins, outs="") => {
    return ins == 0 ? outs : decimalToBinary((ins-(ins%2))/2, ins%2 + outs)
}
console.log(decimalToBinary(856))