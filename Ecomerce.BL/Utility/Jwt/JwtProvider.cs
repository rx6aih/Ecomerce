using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Ecomerce.DAL.Entities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Ecomerce.BL.Utility.Jwt;

public class JwtProvider(IOptions<JwtOptions> options)
{
    private readonly JwtOptions _jwtOptions = options.Value;

    public string GenerateToken(User user)
    {
        Claim[] claims = [
            new("userId", user.Id.ToString()),
            new("Admin", "true")
        ];
        var signingCredentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtOptions.SecretKey)),SecurityAlgorithms.HmacSha256);
        
        var token = new JwtSecurityToken(
            claims: claims,
            signingCredentials:signingCredentials,
        expires: DateTime.UtcNow.AddHours(_jwtOptions.ExpiresHours));
        
        var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);
        
        return tokenValue;
    }
}