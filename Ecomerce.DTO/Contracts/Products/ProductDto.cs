namespace Ecomerce.DTO.Contracts;

public record ProductDto(
    string Title,
    string Description,
    string Image,
    decimal Price,
    int TotalRates,
    decimal Rate,
    int Sale, string Type) : BaseDto;
    
