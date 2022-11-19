
using System;
using System.Collections.Generic;

namespace MBShopBE.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }
        public bool Sold { get; set; }
        public bool New { get; set; }
        public float Price { get; set; }
        public float PriceSold { get; set; }
        public int CategoryId { get; set; }
        public ICollection<Taille> Tailles { get; set; }
        public ICollection<Couleur> Couleurs { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public string ImageURL { get; set; }
        public ICollection<ProdImage> ProdImages { get; set; }
        public DateTime Date { get; set; }

    }
}
