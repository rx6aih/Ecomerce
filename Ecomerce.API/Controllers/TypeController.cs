using Ecomerce.API.Extensions;
using Ecomerce.BL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Ecomerce.DAL.Entities;
using Microsoft.AspNetCore.Authorization;
using Type = Ecomerce.DAL.Entities.Type;

namespace Ecomerce.API.Controllers;

[ApiController]
[Route("types")]
public class TypeController(IService<DAL.Entities.Type,DAL.Entities.Type> typeService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreateType([FromQuery] string name)
    {
        Ecomerce.DAL.Entities.Type type = new Type() { Name = name };
        await typeService.AddAsync(type);
        return NoContent();
    }
    [Authorize(Policy="Admin")]
    [HttpGet]
    public async Task<IActionResult> GetAllTypes()
    {
        return Ok(await typeService.GetAllAsync());
    }
}