
using System.Collections.Generic;

namespace MBShopBE.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public int GroupId { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
