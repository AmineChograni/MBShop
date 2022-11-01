using System.Collections;

namespace MBShopBE.Models
{
    public class Category
    {
        protected int Id { get; set; }
        protected string Label { get; set; }
        protected int GroupId { get; set; }
        protected Group Group { get; set; }
        protected ICollection<Product> Products { get; set; }
    }
}
