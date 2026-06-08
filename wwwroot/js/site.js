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
            loanTerm: parseFloat (document.getElementById("loanTerm").value),
            propertyTaxes: parseFloat (document.getElementById("propertyTaxes").value),//guessing that the home renovation input from my html file wasn't written in here within javascript because it wasn't important? Or enough to be considered as a worthy part of this whole mortgage calculation?
            pmi: parseFloat (document.getElementById("privateMortgageInsurance").value),
            homeInsurance: parseFloat (document.getElementById("homeOwnerInsurance").value),
            hoa: parseFloat (document.getElementById("hOA").value),
            loanStartMonth: parseFloat (document.getElementById("loanStartMonth").value),
            loanStartYear: parseFloat (document.getElementById("loanStartYear").value),
            loanType: parseFloat (document.getElementById("loanType").value),
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
        document.getElementById("monthlyPaymentResult").innerText = data//console.log(data);//This prints the results of the data to the console.
        document.getElementById("monthlyTaxResult").innerText = data
        document.getElementById("monthlyInsuranceResult").innerText = data
    })
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