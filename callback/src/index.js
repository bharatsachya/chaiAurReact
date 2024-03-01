import React from 'react';
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>fu ihf</h1>,document.getElementById('root'))

// let stocks = {
//   Fruits:['Apple','orange','banana','pears'],
//   liquid:['water','ice'],
//   holder:['cone','cup','stick'],
//   toppings:['choclate','peanuts']
// }

// let is_this_shop  =true

// function time(ms){
//   return new Promise(resolve,reject)=>{
//       if(is_this_shop){
//           setTimeout(resolve,ms)
//       }
//       else{
//           reject(console.log("shop is closed"))
//       }
//   }
// }
// let order = (work,time)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_this_shop){
//            setTimeout(()=>{
//                resolve(work())
//            },time) }
//         else{
//             reject(console.log("shoo is closed"))
//         }
//     })
// }

// order(()=>{
//      console.log(`${stocks.Fruits[0]}`)
// },2000)

// .then(()=>{
// return order(()=>{console.log("Production has started")
//                 ,1000}
//             )
// })

// .then(()=>{
//     return order(()=>
//             console.log(`production ${stocks.liquid[0]}`)
//     ,1000)
// })

// .catch(()=>{
//   console.log("Customer left")
// })
// let order = (Fruit_name,call_production) =>{
//     setTimeout(()=>{
//             console.log(`${stocks.Fruits[Fruit_name]}`)
//             call_production()
//     },2000)

// }



// let production = () => {
//     console.log("production has started")
//     setTimeout(()=>{
//        console.log("Food has been chopped")
//         setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.holder[0]}`)
//         setTimeout(()=>{
//             console.log("Machine has started")
//             setTimeout(()=>{
//                 console.log(`${stocks.toppings[0]}`)
//                 setTimeout(()=>{
//                         console.log(`${stocks.toppings[1]}`)
//                     setTimeout(()=>{
//                        console.log("process has been completed")
//                     },2000)
//                 },3000)
//             },1000)
//         },1000)
//       },1000)
//     },2000)
  
// }

// order(3,production)