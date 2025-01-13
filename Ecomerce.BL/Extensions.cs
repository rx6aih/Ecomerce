using AutoMapper;
using Ecomerce.BL.Implementations;
using Ecomerce.BL.Interfaces;
using Ecomerce.BL.Utility;
using Ecomerce.BL.Utility.Jwt;
using Ecomerce.DAL.Entities;
using Microsoft.Extensions.DependencyInjection;

namespace Ecomerce.BL;

public static class Extensions
{
    public static IServiceCollection AddBl(this IServiceCollection services)
    {
        services.AddScoped(typeof(IService<,>), typeof(Service<,>));
        services.AddScoped<UserService>();
        services.AddScoped<JwtProvider>();
        services.AddScoped<PasswordHasher>();
        return services;
    }

}