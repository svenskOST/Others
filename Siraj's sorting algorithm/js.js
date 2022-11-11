var arr = [0, 8, 9, 7, 5, 6, 4, 3, 1, 2]

for(let i = 0; i < 30; i++) {
    //arr.push(Math.round(Math.random()*100))
}

var sorted = []
console.log(arr)
while(arr.length > 0) {
    let lowest = 9e999
    let lowestindex = null
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < lowest) {
            console.log("Lower: " + arr[i] + " <" + " " + lowest)
            lowest = arr[i]
            lowestindex = i
            console.log(arr)
        } 
        else {
            console.log("higher: " + arr[i] + " >" + " " + lowest)
            console.log(arr)
        }
    }
    sorted.push(arr[lowestindex])
    console.log("Lowest: " + lowest)
    console.log("Removed: " + arr.splice(arr.indexOf(lowest), 1))
}

for (let i = 0; i < 3; i++) {
    console.log("--------------------------------------")
}
console.log(sorted)