module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    }
    let del = new Array();
    arr.map((el, i) => {
        switch (el) {
            case '--double-next':
                if (arr[i + 1]) {
                    arr[i] = arr[i + 1];
                }
                break;
            case '--double-prev':
                if (arr[i - 1]) {
                    arr[i] = arr[i - 1];
                }
                break;
            case '--discard-next':
                    del.push(i);
                break;
            case '--discard-prev':
                if (arr[i - 1]) {
                    del.push(i - 1);
                } else {
                    del.push(i);
                }
        }
    });
    for (let i = del.length - 1; i >= 0; i--) {
        let el = del[i];
        if (arr[el + 1]) {
            arr.splice(el, 2);
        } else {
            arr.splice(el, 1);
        }
    }
    return arr;
};
