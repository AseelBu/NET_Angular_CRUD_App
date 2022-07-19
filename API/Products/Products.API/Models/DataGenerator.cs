using Microsoft.EntityFrameworkCore;

namespace Products.API.Models
{
    // Since database is InMemory, data generator is required to seed db with sample data
    //on startup
    public class DataGenerator
    {
        public static void Initialize(WebApplication app)
        {

            var scope = app.Services.CreateScope();
            var db = scope.ServiceProvider.GetService<ProductContext>();

                // Look for any products already in database.
                if (db.Product.Any())
                {
                    return;   // Database has been seeded
                }

                db.Product.AddRange(
                    new Product
                    {
                        Id = 1,
                        Name = "T-shirt",
                        Color = "Red",
                        Price = 34
                    },
                     new Product
                     {
                        Id = 2,
                        Name = "Lamp",
                        Color = "Blue",
                        Price = 45
                     },
                      new Product
                      {
                        Id = 3,
                        Name = "Headphones",
                        Color = "Black",
                        Price = 100
                      },
                       new Product
                       {
                        Id = 4,
                        Name = "Pen",
                        Color = "Pink",
                        Price = 10
                       });

                db.SaveChanges();
            
        }
    }
}
