using Ecomerce.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecomerce.DAL.EntityTypeConfiguration;

public class TypeConfiguration : IEntityTypeConfiguration<Entities.Type>
{
    public void Configure(EntityTypeBuilder<Entities.Type> builder)
    {
        builder.HasKey(x => x.Id);
        builder.HasIndex(x => x.Id).IsUnique();
        builder.Property(x => x.Name).IsRequired();
        builder.HasMany<Product>()
            .WithOne(x => x.Type)
            .HasForeignKey(x => x.TypeId);
    }
}