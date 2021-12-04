//Asynchronous nature of js
// setTimeout(()=>console.log("1.task 1"),300);
// setTimeout(()=>console.log("2.task 2 dependant on task 1"),200);
// setTimeout(()=>console.log("3.task 3 dependant on task 1"),100);

//Synchronization with callbacks.
//Creates a call back hell and reduces code readebility and maintainability.
// console.log("Synchronization with callbacks")
// setTimeout(()=>{
//     console.log("1.task 1")
//     setTimeout(()=>{
//         console.log("2.task 2 dependant on task 1")
//         setTimeout(()=>{
//             console.log("3.task 3 dependant on task 1")
//         },400)
//     },500);
// },600);

//Alternate method by using priomises
// let task1 =()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("1.task 1"),700);
// })};
// let task2 = ()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("2.task 2 dependant on task 1"),600);
// })};
// let task3 = ()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("3.task 3 dependant on task 1"),500);
// })};

// //Promise Snchronization
// task1().then(message1=>{
//     console.log(message1)
//     return task2();
// }).then(message2=>{
//     console.log(message2);
//     return task3();
// }).then(message3=>{
//     console.log(message3);
// });

//Promises Alternative with Async Await
// let task1 =()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("1.task 1"),700);
// })};
// let task2 =()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("2.task 2 dependant on task 1"),600);
// })};
// let task3 =()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("3.task 3 dependant on task 1"),500);
// })};

// let asyncFunction=async()=>{
//     let message1=await task1();
//     console.log(message1);
//     let message2=await task2();
//     console.log(message2);
//     let message3=await task3();
//     console.log(message3);
// }
// asyncFunction();

