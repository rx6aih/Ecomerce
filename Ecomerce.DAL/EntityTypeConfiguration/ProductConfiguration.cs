using Ecomerce.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecomerce.DAL.EntityTypeConfiguration;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(p => p.Id);
        builder.HasIndex(p => p.Id).IsUnique();
        builder.Property(p => p.Title).IsRequired().HasMaxLength(30);
        builder.Property(p => p.Description).IsRequired();
        builder.Property(p => p.Image).IsRequired();
        builder.Property(p => p.Price).IsRequired();
    }
}