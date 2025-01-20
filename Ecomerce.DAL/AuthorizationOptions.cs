using Ecomerce.DAL.Entities;

namespace Ecomerce.DAL;

public class AuthorizationOptions
{
    public RolePermissions[] RolePermissions { get; set; } = [];
}

public class RolePermissions
{
    public string Role { get; set; } = string.Empty;
    public string[] Permission { get; set; } = [];
}