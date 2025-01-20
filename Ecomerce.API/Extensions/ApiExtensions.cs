using System.Text;
using Ecomerce.BL.Authentication;
using Ecomerce.BL.Utility.Jwt;
using Ecomerce.DAL.Enums;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Ecomerce.API.Extensions;

public static class ApiExtensions
{
    public static void AddApiAuthentication(this IServiceCollection services, IConfiguration configuration)
    {
        var jwtSettings = configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();
        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey))
                };
                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        context.Token = context.Request.Cookies["token"];
                        return Task.CompletedTask;
                    }
                };
            });
        services.AddSingleton<IAuthorizationHandler, PermissionAuthorizationHandler>();
        services.AddAuthorization(options =>
        {
            Permission[] adminPermissions = [Ecomerce.DAL.Enums.Permission.Create];
            options.AddPolicy("Admin", policy => policy.AddRequirements(new PermissionRequirement(adminPermissions)));
        });
    }
    public static IEndpointConventionBuilder RequirePermissions<TBuilder>
        (this TBuilder builder, params Permission[] permissions) where TBuilder : IEndpointConventionBuilder
    {
        return builder.RequireAuthorization(policy => policy.AddRequirements(new PermissionRequirement(permissions)));
    }
}