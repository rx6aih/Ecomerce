using Ecomerce.BL.Interfaces;
using Ecomerce.DAL.Entities;
using Ecomerce.DAL.Interfaces;
using Ecomerce.DTO.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ecomerce.API.Controllers;
[ApiController]
[Route("product")]
public class ProductController(IService<Product, ProductSaleDto> productService, IRepository<Category> categories, IRepository<Ecomerce.DAL.Entities.Type> types): ControllerBase
{
    [Authorize]
    [HttpGet("all")]
    public async Task<IActionResult> GetAllAsync(CancellationToken cancellationToken = default)
    {
       return Ok(await productService.GetAllAsync(cancellationToken)); 
    }

    [HttpGet("{type}")]
    public async Task<IActionResult> GetAllByTypeAsync(string? type, CancellationToken cancellationToken = default)
    {
        return Ok((await productService.GetAllWithMapAsync()).Where(x => x.Type == type).ToList());
    }
        
    [HttpPost("")]
    public async Task<IActionResult> CreateProduct([FromQuery]string name,[FromQuery]int type, 
        [FromQuery]int category, [FromQuery]string description, [FromQuery]decimal price)
    {
        Category currentCategory = await categories.GetItemByIdAsync(category);
        if (currentCategory == null)
            return NotFound("Category not found");
        
        Ecomerce.DAL.Entities.Type currentType = await types.GetItemByIdAsync(type);
        if (currentType == null)
            return NotFound("Category not found");

        Product product = new Product()
        {
            Title = name,
            /*CategoryId = currentCategory.Id,
            Category = currentCategory,
            Type = currentType,
            TypeId = currentType.Id,*/
            Description = name,
            Price = price,
        };
        
        product.Title = name;
        /*product.CategoryId = category;
        product.TypeId = type;*/
        await productService.AddAsync(product);
        return Ok();
    }
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetProductById(int id)
    {
        var product = await productService.GetByIdAsync(id);
        if (product == null)
            return NotFound();
        else return Ok(product);
    }
}
