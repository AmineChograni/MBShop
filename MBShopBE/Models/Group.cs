using System.Collections.Generic;

namespace MBShopBE.Models
{
    public class Group
    {
        protected int Id { get; set; }
        protected string Label { get; set; } 
        protected ICollection<Category> Categories { get; set; }
    }
}
