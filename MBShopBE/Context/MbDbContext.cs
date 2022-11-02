using MBShopBE.Models;
using Microsoft.EntityFrameworkCore;

namespace MBShopBE.Context
{
    public class MbDbContext:DbContext
    {
        public MbDbContext(DbContextOptions<MbDbContext> options) : base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Commande> Commandes { get; set; }
        public DbSet<Couleur> Couleurs { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Taille> Tailles { get; set; }
        public DbSet<ProdImage> ProdImages { get; set; }
        public DbSet<MImage> MImages { get; set; }

    }
}
