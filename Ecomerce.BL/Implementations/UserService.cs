using AutoMapper;
using Ecomerce.BL.Utility;
using Ecomerce.BL.Utility.Jwt;
using Ecomerce.DAL.Entities;
using Ecomerce.DAL.Enums;
using Ecomerce.DAL.Interfaces;
using Ecomerce.DAL.Repositories;
using Permission = Ecomerce.DAL.Enums.Permission;

namespace Ecomerce.BL.Implementations;

public class UserService(
    UserRepository userRepository, 
    PasswordHasher passwordHasher, JwtProvider provider) 
{
    public async Task Register(string userName, string email, string password)
    {
        var hashedPassword = passwordHasher.Generate(password);
        
        var user = new User(userName, email, hashedPassword);

        await userRepository.Add(user);
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

    public async Task<List<User>> GetAllUsers()
    {
        return await userRepository.GetAllUsers();
    }

    public Task<HashSet<Permission>> GetPermissions(int userId)
    {
        return userRepository.GetPermissions(userId);
    }    
}