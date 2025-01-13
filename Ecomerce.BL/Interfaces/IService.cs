using Ecomerce.DTO.Contracts;

namespace Ecomerce.BL.Interfaces;

public interface IService<T, TMapTo> where T : class where TMapTo : class
{
    Task AddAsync(T item, CancellationToken cancellationToken = default);
    Task<List<T>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<List<TMapTo>> GetAllWithMapAsync(CancellationToken cancellationToken = default);
    Task<TMapTo> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<T> GetByTypeAsync(string type, CancellationToken cancellationToken = default);
    Task UpdateAsync(T item, int id, CancellationToken cancellationToken = default);
    Task DeleteAsync(T item, CancellationToken cancellationToken = default);
}