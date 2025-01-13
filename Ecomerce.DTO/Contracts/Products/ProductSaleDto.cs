namespace Ecomerce.DTO.Contracts;

public record ProductSaleDto(
    string Title,
    string Description,
    string Image,
    decimal Price,
    int TotalRates,
    decimal Rate,
    int Sale,
    bool OnSaleTop = true,
    string Type = "sale",
    bool OnSaleBot = true) : ProductDto(Title, Description, Image, Price, TotalRates, Rate, Sale, Type)
{
    
}
;
