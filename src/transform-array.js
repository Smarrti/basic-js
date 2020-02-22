module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    }
    let res = new Array();
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                res.pop();
                break;
            case '--double-next':
                if ((arr[i + 1]) || ((isNaN(arr[i + 1])) && (i !== arr.length - 1)) || (arr[i + 1] == false)) {
                    res.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if ((arr[i - 1]) || ((isNaN(arr[i - 1])) && (i !== 0)) || (arr[i - 1] == false)) {
                    res.push(arr[i - 1]);
                }
                break;
            default:
                res.push(arr[i]);
                break;
        }
    }
    return res;
};