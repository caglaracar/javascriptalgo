/* En uygun zamanda satış yap */

const theBestTimeToSell = (priceArray) => {
    let isTheBestPrice = 0;
    for (let i = 0; i < priceArray.length; i++) {
        for (let j = 0; j < priceArray.length; j++) {
            if (i === j) {
                continue;
            }
            if (i > j) {
                continue
            }
            if (priceArray[j] - priceArray[i] > isTheBestPrice) {
                isTheBestPrice = priceArray[j] - priceArray[i];
            }
        }
    }
    return isTheBestPrice
}

const theBestTimeToSells = (priceArray) => {

    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let i = 0; i < priceArray.length; i++) {
        if (priceArray[i] < minPrice) {
            minPrice = priceArray[i]
        } else if (priceArray[i]-minPrice>maxProfit) {
            maxProfit=priceArray[i]-minPrice
        }
    }
    return maxProfit

};


const priceArray = [11, 0, 3, 2, 6, 1, 6];
console.log(theBestTimeToSell(priceArray))
console.log(theBestTimeToSells(priceArray))


