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
        HttpContext.Response.Cookies.Append("token", token);
        return Ok(token);
    }
}