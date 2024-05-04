function func(str, obj){
    for (let key in obj){
      if (key === str) {
        return true
      } else {
        return false
      }
    }
  }
  
  
const trsp = {
    abc: 13123,
    name: 'sss',
    norm: true
  }