//using Microsoft.AspNetCore.Mvc;
//using Products.API.Models;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace Products.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class OLDProductsController : ControllerBase
//    {

//        private readonly IProductService _productService;
//        public OLDProductsController(IProductService productService)
//        {
//            _productService = productService;
//        }


//        //private static List<Product> ProductsList = new List<Product>();
//        //ProductsList.Add();

//        // GET: api/<ProductsController>
//        [HttpGet]
//        public IEnumerable<string> Get()
//        {
//            return new string[] { "value1", "value2" };
//        }

//        //Get all products
//        [HttpGet]
//        public async Task<IActionResult> GetAllProducts()
//        {
//            var products = await _productService.ListAsync();
//            return Ok(products);
//        }

//        //// GET api/<ProductsController>/5
//        //[HttpGet("{id:int}")]
//        //public string GetProduct([FromRoute] int id)
//        //{
//        //    return "value";
//        //}

//        //// POST api/<ProductsController>
//        //[HttpPost]
//        //public void Post([FromBody] string value)
//        //{
//        //}

//        //// PUT api/<ProductsController>/5
//        //[HttpPut("{id}")]
//        //public void Put(int id, [FromBody] string value)
//        //{
//        //}

//        //// DELETE api/<ProductsController>/5
//        //[HttpDelete("{id}")]
//        //public void Delete(int id)
//        //{
//        //}
//    }
//}
