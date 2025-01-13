using AutoMapper;
using Ecomerce.DAL.Entities;
using Ecomerce.DTO.Contracts;

namespace Ecomerce.BL.Mappers;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Product, ProductSaleDto>();
    }
}