class Car {
    constructor() {
      
      let tampung = [];
      const csv = require('csv-parser');
const fs = require('fs');

  fs.createReadStream('src/script/data/Books.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
      tampung.push(row);
      console.log("asdasdsad");
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      console.log(tampung);
    });
      }}
    
  
  let myCar = new Car();