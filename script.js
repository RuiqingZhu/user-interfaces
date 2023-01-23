// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const markBmi = massMark / heightMark ** 2;
// const johnBmi = massJohn / heightJohn ** 2;

// const markHigherBmi = markBmi > johnBmi;

// console.log(markBmi, johnBmi, markHigherBmi)

// let bmiCompare = `John's BMI ${johnBmi}`

// console.log(bmiCompare)


// assignment 1

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


let numNeighbours = prompt('How many neighbour countries does your country have?');
if(numNeighbours === 1){
    console.log('Only 1 border!');
}
else if(numNeighbours > 1){
    console.log('More than 1 border');
}
else{
    console.log('No borders');
};

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

switch(language) {
    case "Mandarin":
        console.log('Most number of native speakers!');
        break;
        case "Spanish":
            console.log('2nd place in number of native speakers');
            break;
            case "English":
                console.log('3rd place');
                break;
                case "Hindi":
                    console.log('Number 4');
                    break;
                    case "Arabic":
                        console.log('5th most spoken language');
                        break;
                        default:
                            console.log('Great language too :D');
}

population > 33 ?
console.log(`${country}'s population is above average.`):
console.log(`${country}'s population is below average.`);

//above lines of code can be replaced by below

console.log(
    `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.\n`;
}

const descJapan = describeCountry('Japan', 125, 'Tokyo');
const descCanada = describeCountry('Canada', 33, 'Ottawa');
const descIndia = describeCountry('India', 1400, 'New Delhi');
console.log(descJapan, descCanada, descIndia);


function percentageOfWorld1(population){
    return population / 7900 * 100;
}

const percentJapan1 = percentageOfWorld1(125);
const percentCanada1 = percentageOfWorld1(33);
const percentIndia1 = percentageOfWorld1(1400);
console.log(percentJapan1, percentCanada1, percentIndia1);


// const percentCountry1 = function(population){
//     return population / 7900 * 100;
// }

// console.log(percentCountry1(125), percentCountry1(33), percentCountry1(1400));

// const percentCountry2 = population => {
//     return population / 7900 * 100;
// }

const percentCountry2 = population => 
    population / 7900 * 100;
console.log(percentCountry2(125), percentCountry2(33), percentCountry2(1400));


const populations = new Array (1412, 125, 33, 1400);
// populations.length == 4 ?
// console.log(true) : 
// console.log(false);
console.log(populations.length === 4);
console.log(populations);

const percentages = new Array(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]));
console.log(percentages);

// const neighbours = ["Austria", "Belgium", "France"];
const neighbours = new Array("Austria", "Belgium", "France");
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.includes("Germany") ? console.log(`All good!`) : console.log(`Probably not a central European country :D`);
console.log(neighbours.indexOf("Belgium"));
// neighbours[1] = "Kingdom of Belgium";
neighbours[neighbours.indexOf("Belgium")] = "Kingdom of Belgium";
console.log(neighbours);


const myCountry = {
    country: "Japan",
    capital: "Tokyo",
    language: 'Japanese',
    population: 125000000,
    neighbours: neighbours,
};
console.log(myCountry)