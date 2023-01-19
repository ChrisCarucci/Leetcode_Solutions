// Runtime: 66ms    Beats: 86.65%    Memory: 44.1MB    Beats: 35.5%


const intersect = (nums1, nums2, arr =[]) => {
    const map = new Map();
    for(let n of nums1) 
          map.set(n, (map.get(n) || 0) + 1);
    
    for(let m of nums2)
        if(map.get(m) > 0) {
            arr.push(m);
            map.set(m, map.get(m)  - 1);
        }
    
    return arr;
};