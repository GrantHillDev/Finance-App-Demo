using Microsoft.AspNetCore.Mvc;
using System;

namespace FinanceApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]//you do not need to create a new controller every time you're crafting a new endpoint -- I'd think it's more efficient to format them in this manner.
    public class FinanceController : ControllerBase
    {
        [HttpPost("double")]//This presumably represents a first 'endpoint' in my API project (POST Api/finance/double).
        public IActionResult DoubleNumber([FromBody] InputModel input)
        {
            var result = input.Number * 2;
            return Ok(result);
        }

        [HttpPost("divideInHalf")]//Second endpoint?
        public IActionResult DivideNumber([FromBody] InputModel input)//Returning a variable.
        {
            var result = input.Number / 2;
            return Ok(result);
        }

        [HttpPost("calculateMortgage")]//Another endpoint.
        public IActionResult CalculateMortgage([FromBody]MortgageInputModel input)//Returning an object.
        {
            double monthlyInterestRate =
                (input.InterestRate / 100) / 12;
            int totalPayments =
                input.LoanTerm * 12;
            double principal =
                input.LoanAmount;
            double monthlyPrincipalAndInterest =
                principal *
                (monthlyInterestRate *
                Math.Pow(1 + monthlyInterestRate,
                totalPayments))
                /
                (Math.Pow(1 + monthlyInterestRate,
                totalPayments) - 1);
            double monthlyTaxes =
                input.PropertyTaxes / 12;
            double monthlyInsurance =
                input.HomeInsurance / 12;
            double totalMonthlyPayment =
                monthlyPrincipalAndInterest +
                monthlyTaxes +
                monthlyInsurance +
                input.PMI +
                input.HOA;

            return Ok(new
            {
                monthlyPayment =
                    totalMonthlyPayment,
                monthlyTaxes,
                monthlyInsurance,
                totalPayments
            });
        }
        
        public class MortgageInputModel//creating an object. Building this because multiple values are being sent in one request -- think it'd make the most sense to provide the user with the easiest means of input, so let them do it once, rather than multiple times for the same result.
        {
            public double HomeMarketValue { get; set; }
            public double DownPayment {  get; set; }
            public double LoanAmount { get; set; }
            public double InterestRate { get; set; }
            public int LoanTerm { get; set; }
            public double PropertyTaxes { get; set; }
            public double PMI { get; set; }
            public double HomeInsurance { get; set; }
            public double HOA { get; set; }
            public string LoanStartMonth { get; set; }
            public int LoanStartYear { get; set; }
            public string LoanType { get; set; }
        }

        public class InputModel//it's looking like we can use the same class for multiple endpoints.... in the same way you can use the same variable name in multiple methods, so long as each is kept within each method's individual scope, mutually exclusive of each other.
        {
            public int Number { get; set; }
        }
    }
}
//[HttpPost("addHomeMarketValue")]
//public IActionResult CalculateHomeMortage([FromBody] InputModel input)
//{
//    var result = input.Number;
//    return Ok(result);
//}

//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace FinanceAppDemo01.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class FinanceController : ControllerBase
//    {
//    }
//}
