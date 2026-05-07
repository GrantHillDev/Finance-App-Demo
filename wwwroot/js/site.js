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
        document.getElementById("result").innerText = data;
    })
    .catch(error => console.error('Error:', error));
}



// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
