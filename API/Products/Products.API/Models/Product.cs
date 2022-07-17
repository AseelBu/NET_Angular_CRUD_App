using System.ComponentModel.DataAnnotations;
namespace Products.API.Models
{
    public class Product
    {

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Price { get; set; }
    }
}
