function func(obj){
    for (let key in obj){
      if (obj.hasOwnProperty(key)){
        console.log(`${key}: ${obj[key]}`)
      }
    }
  }
  
  const stand = {
    a: 123,
    b: 333
  }
  
  const prot = Object.create(stand);
  
  prot.c = 444
  
  func(prot)