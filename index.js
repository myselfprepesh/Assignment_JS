const express = require('express');
const app = express();

app.get('/', (req, res)=>{

    res.send("This is just a sample")
})

require('./routes/route.student')(app);

// getSum = async(a,b)=>{
//     let array = [ ]
//     return array[5]
// }

// getSum = async(a,b)=>{
//     return new Promise(resolve=>{
//         resolve(a+b);
//     })
// }

/*
getsum=async(a,b)=>{
    return new Promise(resolve=>{
            setTimeout(()=>{
            resolve(a+b);
        }, 5000);
    });
}

getsum(5,7).then(data=>{
    console.log(data);
});
*/

//console.log(getSum(5,2));

getsum=async(a,b)=>{
    let sum = await(a+b);
    console.log(sum)
}

app.listen(3000, ()=>{
    console.log('server running:3000');    
})
