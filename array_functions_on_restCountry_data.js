// Get all the countries from Asia continent /region using Filter function

function printAsia() {
  const countries = JSON.parse(this.responseText);
  console.log("Asian Countries : ")
  const country = countries.filter((coun) => {
  									if(coun.continents && coun.region == "Asia")
                    {
                    console.log(coun.name.common);
                    }
  });
}

// Get all the countries with a population of less than 2 lakhs using Filter function

function printPopulation() {
  const countries = JSON.parse(this.responseText);
  console.log("Countries with less than 2 lakh population : ");
  const country = countries.filter((coun) => {
  									if(coun.population <= 200000)
                    {
                    console.log(coun.name.common, coun.population);
                    }
  });
}


// Print the following details name, capital, flag using forEach function

function printDeets() {
  const countries = JSON.parse(this.responseText);
  console.log("Name, Capital, Flag using forEach function");
  const country = countries.forEach((coun) => {
  									
                console.log(coun.name.common, coun.capital, coun.flags.png);
                    
  });
}



// Print the total population of countries using reduce function

function printTotalpopulation() {
  const countries = JSON.parse(this.responseText);
  const population = countries.map((coun) => coun.population);
  
const sum = population.reduce((currSum, nextElement)  => currSum + nextElement);
        console.log("Total Population:", sum);
}


// Print the country which uses US Dollars as currency.

function printUSD() {
  const countries = JSON.parse(this.responseText);
  console.log("Countries using US Dollars as currency : ")
  const country = countries.filter((coun) => {
  								const currencies = coun.currencies;
    return currencies && currencies.USD && currencies.USD.name === "United States dollar";
  
  });
  country.forEach((c) => {
  			console.log(c.name.common, c.currencies.USD.symbol);
  });
}


var request = new XMLHttpRequest();
request.addEventListener("load", printAsia);
request.addEventListener("load", printPopulation);
request.addEventListener("load", printDeets);
request.addEventListener("load", printTotalpopulation);
request.addEventListener("load", printUSD);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


// Output Link: https://jsfiddle.net/3prcLvbn/60/
