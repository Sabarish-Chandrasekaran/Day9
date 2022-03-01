// a.Get all the countries from Asia continent /region using Filter function
//set up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            let result = data.filter(function(conti) {
                if(conti.region=="Asia") {
                    console.log("name: " + conti.name.common)
                }
            })
            console.log(result);            
    }
     else{
        //you should print the error 
        console.log("Data is not available");
    }
}//output=>output can be seen in console(browser) or attached xhrOutput.txt

// b.Get all the countries with a population of less than 2 lakhs using Filter function
//set up http request
var arrayfn=new XMLHttpRequest();
arrayfn.open("GET","https://restcountries.com/v3.1/all");
arrayfn.send();
//Set up a listner where server listen to our request 
arrayfn.onload=function(){
    //process the request and server will return the data in response
    if(arrayfn.status>=200 && arrayfn.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(arrayfn.response);
            // console.log(data);
            let result = data.filter(function(gf) {
                if(gf.population<200000) {
                    console.log("name: " + gf.name.common)
                }
            })
            console.log(result);
    }
    else{
        //you should print the error 
        console.log("Data is not available");
    }
}//output=>output can be seen in console(browser) or attached xhrOutput.txt

// c.Print the following details name, capital, flag using forEach function
//set up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            data.forEach(function(country){
                console.log("Name: " + country.name.common);
                console.log("Capital: " + country.capital);
                console.log("Flag: " + country.flags.png);               
            })
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}//output=>output can be seen in console(browser) or attached xhrOutput.txt

// d.Print the total population of countries using reduce function
//set up http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            let totalPopulation = data.reduce(function(first,next) {
                return first+next.population; 

            },0)
            console.log("total population: " + totalPopulation);
    }
    else{
        //you should print the error 
        console.log("Data is not available");
    }
}//output=>output can be seen in console(browser) or attached xhrOutput.txt
 
// e.Print the country which uses US Dollars as currency.
//set up http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/currency/dollar");
xhr.send();
//Set up a listner where server listen to our request 
xhr.onload = function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            let result = data.filter(function(money) {
                
                if(money.currencies.USD) {
                    console.log("name: " + money.name.common)
                    // console.log(money.currencies)
                }
            })
            console.log(result);            
    }
     else{
        //you should print the error 
        console.log("Data is not available");
    }
}//output=>output can be seen in console(browser) or attached xhrOutput.txt

