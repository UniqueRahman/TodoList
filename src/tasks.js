// let a=[ 1,[2,3],[4,[6],[7]]];
// let result =[]
// const flatten=(a)=>{
//     for(let i=0;i<a.length;i++){
//         if(Array.isArray(a[i])){
//             flatten(a[i])
//         } else{
//             result.push(a[i])
//         }
//     }
// }
// flatten(a)
// console.log(result);
// ------------------------------------------------------
// let a=[ 1,[2,3],[3,[6],[7]]];
// const flatten=(a)=>{
//     let result =[]
//     for(let i=0;i<a.length;i++){
//         if(Array.isArray(a[i])){
//             result=result.concat(flatten(a[i]))
//         } else{
//             result.push(a[i])
//         }
//     }
//     return result
// }
// console.log(flatten(a));
// -------------------------------------------------------
// let a = [1, [2, 3], [3, [6], [7]]];
// var flattened = [];
// for (var i = 0; i < a.length; i++) {
//   var current = a[i];
//   if (Array.isArray(current).length == 1) {
//         flattened.concat(...current);
//   } else {
//     for (var j = 0; j < current.length; j++) {
//       flattened.push(current[j]);
//     }
//   }
// }

// console.log(flattened);
// -------------------------------------------------------

let obj=[{AddInputs: ["Kaleel Rahman","sameem"], AddTxt: ["chennai"], Addimg: ["C:\fakepath\Screenshot (67).png"]}]
obj.map((item)=>{
    item.AddInputs.map((items)=>{
        console.log(items);
    })
   
})
