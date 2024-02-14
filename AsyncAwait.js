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

async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('coffe')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(err){
        console.log(err)
    }
    
}

serveOrder()

