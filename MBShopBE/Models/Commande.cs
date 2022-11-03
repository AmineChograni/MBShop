using System;

namespace MBShopBE.Models
{
    public class Commande
    {
        public int Id { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public int Telephone { get; set; }
        public int TelephoneValidation { get; set; }
        public string Adresse { get; set; }
        public string Ville { get; set; }
        public string CodePostal { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public DateTime Date { get; set; }
    }
}
