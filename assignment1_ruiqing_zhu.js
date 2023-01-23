const country = 'China';
const continent = 'Aisa';
let population = 1412;
console.log(country, continent, population);

const isIsland = false;
const language = 'Mandarin';
console.log(isIsland, population, country, language);
// console.log(isIsland = true);

let splitPopulation = population / 2;
console.log(splitPopulation);
console.log(population + 1);

if(population > 6){
    console.log(`China's population ${population} million is greater than Finland's 6 million`);
};

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);



console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// let numNeighbours = prompt('How many neighbour countries does your country have?');
// if(numNeighbours === 1){
//     console.log('Only 1 border!');
// }
// else if(numNeighbours > 1){
//     console.log('More than 1 border');
// }
// else{
//     console.log('No borders');
// };

if(!language == 'English' || population >= 50 || isIsland == true){
    console.log(`${country} does not meet your criteria :(`);
} else {
    console.log(`You should live in ${country} :)`);
}

let dophinsAverage = (96+108+89)/3;
let koalasAverage = (88+91+110)/3;
console.log(dophinsAverage, koalasAverage);

if(dophinsAverage > koalasAverage){
    console.log('The winner is Dolphins');
} else if(dophinsAverage < koalasAverage){
    console.log('The winner is Koalas');
} else {
    console.log('It\'s a Tie');
}
