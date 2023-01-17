
const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }



function printDepthFirst(start, visited = new Set()) {
    // your code here
    let adj = adjList;
  
  
          const stack = [];
          stack.push(start);
          visited.add(start)
          let visitedArr = [];
  
  
          while(stack.length) {
  
              let Node = stack.pop();
              visitedArr.push(Node)
              console.log(" Visited Node: " + Node)
              
              let neighbors = adj[Node]
  
              
              
  
              
              for (let i = 0; i < neighbors.length; i++) {
                  if (!visited.has(neighbors[i])) {
                  stack.push(neighbors[i]);
                  }
              }
              neighbors.forEach(neighbor => visited.add(neighbor))
          }
          console.log("Visited Nodes: " + JSON.stringify([...visited]))
          console.log("VisstedArr: " + visitedArr)
          return false;
      }