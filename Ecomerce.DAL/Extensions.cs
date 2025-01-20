using Ecomerce.DAL.Context;
using Ecomerce.DAL.Entities;
using Ecomerce.DAL.Interfaces;
using Ecomerce.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Ecomerce.DAL;

public static class Extensions
{
    public static IServiceCollection AddDal(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddDbContext<AppDbContext>(x =>
            x.UseNpgsql("Server=localhost;Port=5435;Database=EcomerceTest;User Id=postgres;Password=postgres"
        ));
        return services;
    }
}