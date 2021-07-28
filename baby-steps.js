// console.log(process.argv[2])
const summ = (arr) => {
    let sum=0
    for (let i=2; i <= arr.length-1;i++){
  sum  = sum + +arr[i]
  // console.log(i)
    }
    return sum
}
console.log(summ(process.argv)) 