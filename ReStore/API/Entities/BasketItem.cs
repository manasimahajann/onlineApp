using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http.Features;

namespace API.Entities
{
    [Table("BasketItmes")]
    public class BasketItem
    {
        public int Id {get; set; }
        public int Quantity {get; set;}
        // nav properties
        public int productId {get; set;}
        public Product Product {get; set;} 

        public int BasketId {get; set;}
        public Basket Basket {get; set;}
    }
}