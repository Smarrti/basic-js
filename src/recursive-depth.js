module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let retryArr = new Array();
        let retry = false;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                retryArr.push(...arr[i]);
                retry = true;
            }
        }
        if (retry) {
            depth += this.calculateDepth(retryArr);
        }
        return depth;
    }
};