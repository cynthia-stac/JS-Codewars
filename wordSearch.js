function wordSearch(query, seq){
  //your code here
  var arr=[];
  seq.forEach((element)=>{
    if(element.toLowerCase().includes(query.toLowerCase())){
      arr.push(element)
    }
  }
              )
              return arr.length>0 ? arr :["Empty"];
}
console.log(wordSearch("word",["full word","home"]))