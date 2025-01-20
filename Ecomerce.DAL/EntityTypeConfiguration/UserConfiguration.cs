using Ecomerce.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecomerce.DAL.EntityTypeConfiguration;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasIndex(u => u.Id).IsUnique();
        builder.HasKey(u => u.Id);
        
        builder.HasMany(u => u.Roles)
            .WithMany(r => r.Users)
            .UsingEntity<UserRole>(
                l=> l.HasOne<Role>().WithMany().HasForeignKey(r=> r.RoleId),
                r=> r.HasOne<User>().WithMany().HasForeignKey(r=>r.UserId));
    }
}