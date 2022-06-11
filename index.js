// code your solution here
// function superBowlWin(item){
//     for (let name of item) {
//       if(name.result==="W"){
//         console.log(name.year)
//       } 
//     }
//   }
function superbowlWin(record){
    let result = record.find(record=>record.result==="W")
    return result ? result.year: undefined;
    
}

