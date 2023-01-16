
var findSmallestSetOfVertices = function(n, edges) {
    const degree = Array(n).fill(0);
    const output = [];
    console.log("Degree: " + [...degree])
    edges.forEach(([from, to]) => degree[to]++);
    console.log("Degree: " + [...degree])
    degree.forEach((deg, i) => !deg && output.push(i));
    console.log("Degree: " + [...degree])
    return output;
};