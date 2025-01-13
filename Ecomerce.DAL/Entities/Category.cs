namespace Ecomerce.DAL.Entities;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; } = String.Empty;
    public string Link { get; set; } = String.Empty;
    public List<Product>? Products { get; set; } = new List<Product>();
}