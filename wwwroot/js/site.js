function sendData()
{
    const value = document.getElementById("numberInput").value;
    

    fetch('https://localhost:44324/api/finance/double',
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({number: parseInt(value)})

    })
    .then(response => response.json())
    .then(data =>
    {
        document.getElementById("doubleResult").innerText = data;
    })
    .catch(error => console.error('Error:', error));
}

function divideNumber()//to push over multiple lines at once in visual studio, simply select all of the lines you wish to tab over, with your cursor and then press the tab key.
{
    const value = document.getElementById("valueInput").value;

    fetch('https://localhost:44324/api/finance/divideInHalf',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({number: parseInt(value)})
        })
        .then(response => response.json())
        .then(data =>
        {
            document.getElementById("divideResult").innerText = data;//make sure that innerText gets properly spelled and capitalized.... not doing this could prevent JavaScript from being able to run your webpage properly, and it won't always throw runtime errors at you when this happens.
        })
        .catch(error => console.error('Error:', error));
}

function calculateMortgage()//actually, this is an object made in javascript.... a json object? Oh.... json is an acronym for javascript object notation.... because I thought javascript wasn't necessarily an object oriented language?
{
    const mortgageData = //didn't know that you could create multiple fields of variables with stored data in them all to equate to one const. Like an on object in C#....
    {
            homeMarketValue: parseFloat (document.getElementById("homeMarketValue").value),//what's a floating point number?
            downPayment: parseFloat (document.getElementById("downPayment").value),//naming the variable here in javascript the same thing as what it's retrieving from the input id attribute name (that's already been written in my html component) makes this so much simpler.
            loanAmount: parseFloat (document.getElementById("loanAmount").value),
            interestRate: parseFloat (document.getElementById("interestRate").value),
            loanTerm: parseInt (document.getElementById("loanTerm").value),
            propertyTaxes: parseFloat (document.getElementById("propertyTaxes").value),//guessing that the home renovation input from my html file wasn't written in here within javascript because it wasn't important? Or enough to be considered as a worthy part of this whole mortgage calculation?
            pmi: parseFloat (document.getElementById("privateMortgageInsurance").value),//parseFloat because the input intakes numerical values.
            homeInsurance: parseFloat (document.getElementById("homeOwnerInsurance").value),
            hoa: parseFloat (document.getElementById("hOA").value),
            loanStartMonth: document.getElementById("loanStartMonth").value,//these values are reference based -- they're strings, and therefore don't need to be parsed as numbers.
            loanStartYear: parseInt (document.getElementById("loanStartYear").value),
            loanType: document.getElementById("loanType").value,//for values that don't need to be parsed, remove the extra set of parentheses.
    }
    fetch('https://localhost:44324/api/finance/calculateMortgage',
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mortgageData)
    })
    .then(response => response.json())
    .then(data =>
    {
        document.getElementById("monthlyPaymentResult").innerText = `$${data.monthlyPayment.toFixed(2)}`;//console.log(data);//This prints the results of the data to the console. This is actually an ideal first step to executing as a matter of debugging everything before it reaches the UI.... use the console.log function to see what comes up in the console of the UI before it gets printed to the UI itself.... presumably, this saves time. Think of it like making certain that the backend is returning the correct data (always do this when building APIs).
        document.getElementById("monthlyTaxResult").innerText = `$${data.monthlyTaxes.toFixed(2)}`;//this block of code was giving me errors before at runtime.... but now they're not and I'm not sure why -- was it because I restarted VS code and VS community? I was getting an error of 400 'bad request' before, relentlessly....
        document.getElementById("monthlyInsuranceResult").innerText = `$${data.monthlyInsurance.toFixed(2)}`;//alright so error 400 bad request broadly translates to 'the server recieved a reuest, but didn't like the data it recieved.' That would make sense in a variety of different coding or syntactic contexts, but in the case of my app as it is right now, likely means that something was left undefined, before it got sent over to the server, thus resulting in an erorr 400 bad request.
    })//.elaborating on this error a little further; there's such a notion as NaN which is an acronym for 'Not a Number'. If my loan amouint, for example, is left blank, json interprets this as NaN, and json doesn;t support NaN. when it gets to ASP.NET, it will try to deserialize this input into C#.... and the property deifnition I wrote for the loan amount: public double LoanAmount { get; set; }, and this fails.
    .catch(error =>
        console.error('Error:', error));
}
// function submitHomeMarketValue()
// {
//     const value = document.getElementById("homeMarketValue").value;

//     fetch('https://localhost:44324/api/finance/addHomeMarketValue',
//         {
//             method: 'POST',
//             headers:
//             {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({number: parseInt(value)})
//         })
//         .then(response => response.json())
//         .then(data =>
//         )
//         .catch(error => console.error('Error:', error));
// }

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.