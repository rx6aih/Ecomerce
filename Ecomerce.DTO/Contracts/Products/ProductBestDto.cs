namespace Ecomerce.DTO.Contracts;

public record ProductBestDto(
    string Title,
    string Description,
    string Image,
    decimal Price,
    int TotalRates,
    decimal Rate,
    int Sale,
    bool OnSaleTop = false,
    string Type = "best",
    bool OnSaleBot = true) : ProductDto(Title, Description, Image, Price, TotalRates, Rate, Sale, Type);