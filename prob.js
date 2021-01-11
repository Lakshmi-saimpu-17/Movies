function wave(str){
    // Code here
    let str1= str.split("");
    
    for(let i=0;i<=str1.length;i++){
      return str1[i].toUpperCase();
    }
  }
  console.log(wave("hello"));