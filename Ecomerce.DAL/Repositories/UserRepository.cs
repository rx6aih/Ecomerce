using Ecomerce.DAL.Context;
using Ecomerce.DAL.Entities;
using Ecomerce.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Ecomerce.DAL.Repositories;

public class UserRepository(AppDbContext context) : Repository<User>(context)
{
    public async Task<User> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
    {
        var user = await context
            .Users.AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email == email, cancellationToken) ?? throw new Exception("User not found");
        return user;
    }
}