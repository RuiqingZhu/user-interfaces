//Exercise 1

const bill1 = 275;
const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);

const bill2 = 40;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);


//Exercise 2
//Test Data 1
const calcAverage1 = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;

const scoreDolphins1 = calcAverage1(44, 23, 71);
const scoreKoalas1 = calcAverage1(65, 54, 49);

console.log(scoreDolphins1, scoreKoalas1);



const checkWinner1 = function (avgDolphins1, avgKoalas1) {
    if (avgDolphins1 >= avgKoalas1 * 2) {
        console.log(`Dolphins wins (${avgDolphins1} vs. ${avgKoalas1})`);
    } else if (avgKoalas1 >= avgDolphins1 * 2) {
        console.log(`Koalas wins (${avgKoalas1} vs. ${avgDolphins1})`);
    } else {
        console.log(`No team wins!`)
    }
}

checkWinner1(scoreDolphins1, scoreKoalas1);


//Test Data 2
const calcAverage2 = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;

const scoreDolphins2 = calcAverage2(85, 54, 41);
const scoreKoalas2 = calcAverage2(23, 34, 27);

console.log(scoreDolphins2, scoreKoalas2);



const checkWinner2 = function (avgDolphins2, avgKoalas2) {
    if (avgDolphins2 >= avgKoalas2 * 2) {
        console.log(`Dolphins wins (${avgDolphins2} vs. ${avgKoalas2})`);
    } else if (avgKoalas2 >= avgDolphins2 * 2) {
        console.log(`Koalas wins (${avgKoalas2} vs. ${avgDolphins2})`);
    } else {
        console.log(`No team wins!`)
    }
}

checkWinner2(scoreDolphins2, scoreKoalas2);