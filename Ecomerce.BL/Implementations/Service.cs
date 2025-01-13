using AutoMapper;
using Ecomerce.BL.Interfaces;
using Ecomerce.DAL.Interfaces;

namespace Ecomerce.BL.Implementations;

public class Service<T, TMapTo>(IRepository<T> repository) : IService<T, TMapTo> where T : class where TMapTo : class
{
    public virtual async Task AddAsync(T item, CancellationToken cancellationToken = default)
    {
        var conf = new MapperConfiguration(cfg => cfg.CreateMap(typeof(TMapTo), typeof(T)));
        var mapper = new Mapper(conf);
        T result = mapper.Map<T>(item);
        await repository.CreateAsync(result, cancellationToken);
    }

    public async Task<List<T>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await repository.GetItemsAsync(cancellationToken);
    }
    public async Task<List<TMapTo>> GetAllWithMapAsync(CancellationToken cancellationToken = default)
    {
        List<T> items = await repository.GetItemsAsync(cancellationToken);
        var conf = new MapperConfiguration(cfg => cfg.CreateMap(typeof(T), typeof(TMapTo)));
        Mapper mapper = new Mapper(conf);
        List<TMapTo> result = mapper.Map<List<TMapTo>>(items);
        return result;
    }
    
    public async Task<TMapTo> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var item = await repository.GetItemByIdAsync(id, cancellationToken);
        if (item == null)
        {
            throw new Exception($"No such {typeof(T).Name} item");
        }
        var conf = new MapperConfiguration(cfg => cfg.CreateMap(typeof(T), typeof(TMapTo)));
        Mapper mapper = new Mapper(conf);
        TMapTo result = mapper.Map<TMapTo>(item);
        return result;
    }

    public async Task<T> GetByTypeAsync(string type, CancellationToken cancellationToken = default)
    {
        var result = await repository.GetByTypeAsync(type, cancellationToken);
        if (result == null)
        {
            throw new Exception($"No such {typeof(T).Name} item");
        }

        return result;
    }

    public async Task UpdateAsync(T item, int id, CancellationToken cancellationToken = default)
    {
        var current = await repository.GetItemByIdAsync(id, cancellationToken);
        if(current == null)
            throw new Exception($"No such {typeof(T).Name} item");
        await repository.UpdateAsync(item, id, cancellationToken);
    }

    public async Task DeleteAsync(T item, CancellationToken cancellationToken = default)
    {
        await repository.DeleteAsync(item, cancellationToken);
    }
}