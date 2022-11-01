namespace MBShopBE.Models
{
    public class Commande
    {
        protected int Id { get; set; }
        protected string Label { get; set; }
        protected int Telephone { get; set; }
        protected int TelephoneValidation { get; set; }
        protected string Adresse { get; set; }
        protected string Ville { get; set; }
        protected string CodePostal { get; set; }
        protected int ProductId { get; set; }
        protected Product Product { get; set; }
    }
}
