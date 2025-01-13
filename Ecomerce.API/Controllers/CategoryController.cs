using Ecomerce.BL.Interfaces;
using Ecomerce.DAL.Entities;
using Ecomerce.DTO.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Ecomerce.API.Controllers;
[ApiController]
[Route("categories")]
public class CategoryController(IService<Category, CategoryDto> service) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreateAsync([FromQuery]string name,[FromQuery] string link,[FromQuery] string image)
    {
        Category category = new Category()
        {
            Name = name,
            Link = link,
            Image = image
        };
        await service.AddAsync(category);
        return NoContent();
    }
    [HttpGet]
    public async Task<IActionResult> GetAllAsync()
    {
        return Ok(await service.GetAllAsync());
    }
}