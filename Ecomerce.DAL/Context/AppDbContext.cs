using Ecomerce.DAL.Entities;
using Ecomerce.DAL.EntityTypeConfiguration;
using Microsoft.EntityFrameworkCore;

namespace Ecomerce.DAL.Context;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Entities.Type> Types { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<User> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ProductConfiguration());
        modelBuilder.ApplyConfiguration(new CategoryConfiguration());
        modelBuilder.ApplyConfiguration(new TypeConfiguration());
        modelBuilder.ApplyConfiguration(new UserConfiguration());        
        base.OnModelCreating(modelBuilder);
    }
}