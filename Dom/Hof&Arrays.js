const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
// forEach
// filter
// Map
// reduce

// companies.forEach(function(company){
//     // console.log(company.category);
//     // console.log(company.start);
// })

// filter

// const canAge = ages.filter(function(age){

//     if(age >=50){
//         return true;
//     }
// })
// console.log(canAge);

// ES6

// const canAge = ages.filter(age => age >= 21)


// let canAge = [];

// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//         canAge.push(ages[i])
//     }
// }
// console.log(canAge);


// filter the retail company

// const retailcompanies = companies.filter(comapny => comapny.category ==='Retail');

// console.log(retailcompanies);

// Another Form

// const retailcompanies = companies.filter(function(company){
//         if(company.category === 'Retail'){
//             return true;
//         }
// });
// console.log(retailcompanies);

// Get 80s Comapnies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// console.log(companies);


// Map
// we can create a new array i.e comapny names

// const companyNames = companies.map(function(company){
//     return company.name;
// });

// console.log(companyNames);


// const testMap = companies.map(function(company){
//     return  `${company.name} [${company.start} - ${company.end}]`
// });

// console.log(testMap);7


// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const doubleAge = ages.map(age => age * 2);
// console.log(doubleAge);

// doing this  both in one line;

// sort



// const sortedComapnies = companies.sort(function(c1 , c2){
//     if(c1.start > c2.start){

//         return 1;
//     }
//     else{
//         return -1;
//     }
// })

// console.log(sortedComapnies);

// In single line

// const sortedComapnies = companies.sort((c1 , c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortedComapnies);


// sort Ages

// const sortAges = ages.sort();
// console.log(sortAges);


// Reduce

// let ageSum = 0;

// for (let i = 0; i <ages.length; i++){
//      ageSum += ages[i];
// }

// console.log(ageSum);


// const ageSum = ages.reduce(function(total , age){
//     return total + age;
// } , 0);

// console.log(ageSum);

const ageSum = ages.reduce ((total , age) => (total + age),0)
// console.log(ageSum);

// Total years for the company


// const totalYears = companies.reduce(function(total , company){
//     return total + (company.end - company.start)
// },0)

// console.log(totalYears);

const totalYears = companies.reduce((total , company) => (total + (company.end - company.start)),0);
console.log(totalYears);