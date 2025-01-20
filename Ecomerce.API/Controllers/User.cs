using Ecomerce.BL.Implementations;
using Ecomerce.DTO.Contracts.User;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Ecomerce.API.Controllers;
[ApiController]
[Route("Authentication")]
public class User(UserService userService) : ControllerBase
{  
    [HttpPost("Register")]
    public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
    {
        await userService.Register(userRegisterDto.UserName, userRegisterDto.Email, userRegisterDto.Password);
        return Ok();
    }
    [HttpPost("Login")]
    public async Task<IActionResult> Login(UserLoginDto userLoginDto)
    {
        var token = await userService.Login(userLoginDto.Email, userLoginDto.Password);
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            SameSite = SameSiteMode.None,
            Secure = false,
            Expires = DateTime.Now.AddMinutes(1), 
            IsEssential = true
        };
        HttpContext.Response.Cookies.Append("token", token,new CookieOptions() { SameSite = SameSiteMode.Lax });
        return Ok(token);
    }

    [HttpGet("All")]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await userService.GetAllUsers());
    }
}