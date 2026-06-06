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



// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.