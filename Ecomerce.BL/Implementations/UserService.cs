using AutoMapper;
using Ecomerce.BL.Utility;
using Ecomerce.BL.Utility.Jwt;
using Ecomerce.DAL.Entities;
using Ecomerce.DAL.Interfaces;
using Ecomerce.DAL.Repositories;

namespace Ecomerce.BL.Implementations;

public class UserService(
    UserRepository userRepository, 
    PasswordHasher passwordHasher, JwtProvider provider) 
{
    public async Task Register(string userName, string email, string password)
    {
        var hashedPassword = passwordHasher.Generate(password);
        
        var user = new User(userName, email, hashedPassword);

        await userRepository.CreateAsync(user);
    }

    public async Task<string> Login(string email, string password)
    {
        var user = await userRepository.GetByEmailAsync(email);
        var result = passwordHasher.Verify(password, user.PasswordHash);
        if (result == false)
            throw new Exception("Failed Login");
        
        var token = provider.GenerateToken(user);
        
        return token;
    }
}