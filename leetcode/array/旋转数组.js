let rotate = function (nums, k) {
    let n = nums.length;
    let tmpEnd = 0;
    let tmpPrev = 0;
    for (let i = 0; i < k; i++) {
        tmpEnd = nums[n - 1];
        for (let r = 0; r < n; r++) {
            tmpPrev = nums[r];
            nums[r] = tmpEnd;
            tmpEnd = tmpPrev;
        }
    }
    console.log(tmpPrev, tmpEnd, nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)
