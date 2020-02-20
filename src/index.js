module.exports = function reverse (n) {
    n=Math.abs(n);
    let s=n.toString().split("").reverse();
    n=Number(s.join(""));
    console.log("output type is <"+typeof(n)+"> and output value is: "+n)
    return n;
}
