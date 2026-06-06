using Microsoft.AspNetCore.Mvc;

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
        public IActionResult DivideNumber([FromBody] InputModel input)
        {
            var result = input.Number / 2;
            return Ok(result);
        }
    }


    public class InputModel//it's looking like we can use the same class for multiple endpoints.... in the same way you can use the same variable name in multiple methods, so long as each is kept within each method's individual scope, mutually exclusive of each other.
    {
        public int Number { get; set; }
    }
}


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
