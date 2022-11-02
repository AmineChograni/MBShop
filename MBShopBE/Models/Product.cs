﻿
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
        public Category Category { get; set; }
        public ICollection<Taille> Tailles { get; set; }
        public ICollection<Couleur> Couleurs { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public MImage MImage { get; set; }
        public ICollection<Image> Images { get; set; }

    }
}
