let obj = {
    "source-1":{
        "info-A": {
            "key-A1": "value-A1",
            "key-A2": "value-A2"
        },
        "info-B": {
            "key-B1": "value-B1",
            "key-B2": "value-B2"
        }
    },
    "source-2": {
        "key-C1": "value-C1",
        "key-C2": "value-C2"
    },
    "source-3":{
        "info-D": {
            "key-D1": "value-D1",
            "key-D2": "value-D2"
        },
        "info-E": {
            "key-E1": "value-E1",
            "key-E2": "value-E2"
        }
    }
}


let res=Object.flatMap(Object.entries(obj))
console.log(res)




let arrayOut = [
    {"info-A": {
        "FROM": "source-1",
        "key-A1": "value-A1",
        "key-A2": "value-A2"}
    },
    {"info-B": {
        "FROM": "source-1",
        "key-B1": "value-B1",
        "key-B2": "value-B2"}
    },
    {"source-2": {
        "FROM": "source-2",
        "key-C1": "value-C1",
        "key-C2": "value-C2"}
    },
    {"info-D": {
        "FROM": "source-3",
        "key-D1": "value-D1",
        "key-D2": "value-D2"}
    },
    {"info-E": {
        "FROM": "source-3",
        "key-E1": "value-E1",
        "key-E2": "value-E2"}
    }
]




// const errorsIn = Object.entries(obj.contactlessTask);

// loop = (arrIn, arrOut=[]) => {
//   for (let i = 0; i<arrIn.length; i++){
//     arrOut.push({[arrIn[i][0]]: arrIn[i][1]});
//   }
//   return arrOut;
// }

// recur = (arrIn, arrOut=[]) => {
//   if (arrIn.length != arrOut.length) {
//     arrOut.push({[arrIn[arrOut.length][0]]: arrIn[arrOut.length][1]});
//     recur(arrIn, arrOut);
//   }
//   return arrOut;
// }

// recur2 = (arrIn, arrOut=[]) => {
//   if (arrIn.length > 0) {
//     arrOut.push({[arrIn[0][0]]: arrIn[0][1]});
//     arrIn.shift(); recur2(arrIn, arrOut);
//   }
//   return arrOut;
// }

// console.log(loop(errorsIn));
// console.log(recur(errorsIn));
// console.log(recur2(errorsIn));