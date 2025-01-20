using Ecomerce.DAL.Enums;
using Microsoft.AspNetCore.Authorization;

namespace Ecomerce.BL.Authentication;

public class PermissionRequirement : IAuthorizationRequirement
{
    public PermissionRequirement(Permission[] permissions)
    {
        Permissions = permissions;
    }
    public Permission[] Permissions { get; set; } = [];
}