let twoSum = (array, sum) => {
  let map = new Map();
  
  for(let i=0;i < array.length; i++){
      let target = sum - array[i]
      
      if(map.has(target)) {
        return [i, map.get(target, i)]
      }
      map.set(array[i], i)
  }
}