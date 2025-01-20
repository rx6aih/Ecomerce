using Ecomerce.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecomerce.DAL.EntityTypeConfiguration;

public class RolePermissionConfiguration : IEntityTypeConfiguration<RolePermission>
{
    private readonly AuthorizationOptions _authorization;

    public RolePermissionConfiguration(AuthorizationOptions authorization)
    {
        _authorization = authorization;
    }
    public void Configure(EntityTypeBuilder<RolePermission> builder)
    {
        builder.HasKey(r => new { r.RoleId, r.PermissionId });
        builder.HasData(ParseRolePermissions());
    }

    private RolePermission[] ParseRolePermissions()
    {
        return _authorization.RolePermissions
            .SelectMany(rp => rp.Permission
            .Select(p => new RolePermission
            {
                RoleId = (int)Enum.Parse<Enums.Role>(rp.Role),
                PermissionId = (int)Enum.Parse<Enums.Permission>(p),
            }))
            .ToArray();
    }
}