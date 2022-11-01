
using System.Collections.Generic;

namespace MBShopBE.Models
{
    public class Product
    {
        protected int Id { get; set; }
        protected string Label { get; set; }
        protected string Description { get; set; }
        protected string Image { get; set; }
        protected bool Sold { get; set; }
        protected bool New { get; set; }
        protected float Price { get; set; }
        protected float PriceSold { get; set; }
        protected int CategoryId { get; set; }
        protected Category Category { get; set; }
        protected ICollection<Taille> Tailles { get; set; }
        protected ICollection<Couleur> Couleurs { get; set; }
        protected ICollection<Tag> Tags { get; set; }

    }
}
