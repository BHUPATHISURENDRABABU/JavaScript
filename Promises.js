function placeOrder(order){
    return new Promise(function(resolve,reject){
        if(order==='coffee'){
            resolve('Order for coffee is received...')
        }
        else{
            reject('Other orders get rejected!')
        }
    })
}

function processOrder(order){
    console.log("Your order is being processed")
    return new Promise(function(resolve){
        resolve(`${order} is served`)
    })
}



placeOrder('coffe').then(function(resolved){
    console.log(resolved);
    let processedOrder = processOrder(resolved)  //Promise with in the Promise
    return processedOrder
}).then(function(resolved){
    console.log(resolved)
}).catch(function(err){
    console.log(err)
})