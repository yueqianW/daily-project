// var maxProfit = function (prices) {
//     let money = 0;
//     let buy = prices[0];

//     console.log('- prices', prices)

//     for (let price of prices) {
//         console.log('- buy', buy)

//         if (price > buy) {
//             console.log('- price', price)

//             // 卖出
//             money += (price - buy)
//         }
//         buy = price
//     }
//     console.log('- money', money)

//     return money
// };


var maxProfit = function (prices) {
    let money = 0;

    for (let i = 0; i < prices.length; i++) {
        let ben = prices[i + 1] - prices[i];
        if (ben > 0) {
            // 卖出
            money += ben
        }
    }
    console.log(money)
    return money
};
maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([1, 2, 3, 4, 5])