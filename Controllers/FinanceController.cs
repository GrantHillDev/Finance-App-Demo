using  Microsoft.AspNetCore.Mvc;

namespace FinanceApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FinanceController : ControllerBase
    {
        [HttpPost("double")]//This presumably represents a first 'endpoint' in my API project (POST Api/finance/double).
        public IActionResult DoubleNumber([FromBody] InputModel input)
        {
            var result = input.Number * 2;
            return Ok(result);
        }
    }

    public class InputModel
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
