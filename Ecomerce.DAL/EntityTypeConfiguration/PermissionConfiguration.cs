using Ecomerce.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecomerce.DAL.EntityTypeConfiguration;

public class PermissionConfiguration : IEntityTypeConfiguration<Permission>
{
    public void Configure(EntityTypeBuilder<Permission> builder)
    {
        builder.HasKey(x => x.Id);

        var permissions = Enum
            .GetValues<Enums.Permission>()
            .Select(p => new Permission
            {
                Id = (int)p,
                Name = p.ToString(),
            });
        builder.HasData(permissions);
    }
}