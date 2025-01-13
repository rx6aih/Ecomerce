namespace Ecomerce.DAL.Entities;

public class Product
{
    public int Id { get; set; }
    public bool OnSale { get; set; } = false;
    public string Title { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Image { get; set; } = String.Empty;
    public decimal Price { get; set; }
    public int TotalRates { get; set; } = 0;
    public decimal Rate { get; set; } = 0;
    public int Sale { get; set; } = 0;
    public int TypeId { get; set; }
    public Type? Type { get; set; } = null;
    public int? CategoryId { get; set; }  
    public Category? Category { get; set; } = null;
}