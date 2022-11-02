namespace MBShopBE.Models
{
    public class MImage
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}
