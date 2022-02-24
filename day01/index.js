// --- 1 ---

function obeb(x,y) {
    const min = x < y ? x : y; // callback function
    for (let i = min; i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
}
