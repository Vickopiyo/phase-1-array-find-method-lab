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
    if(result===true){
        return record.year;
    }else{
        return undefined;
    }
 
}
function superBowlWin(sadReality){
    let result = record.find(record=>record.result==="N/A")
    result = undefined;
    return result;
}
