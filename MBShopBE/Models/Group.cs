using System.Collections.Generic;

namespace MBShopBE.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string Label { get; set; } 
        public ICollection<Category> Categories { get; set; }
    }
}
