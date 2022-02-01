module.exports = function reverse (n) {
    let numStr = n.toString();
    let finalStr = '';

    for (let i = numStr.length - 1; i >= 0; i--)
    {
        finalStr += numStr[i];
    }

    return parseInt(finalStr);
}
