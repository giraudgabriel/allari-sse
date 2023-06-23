using Domain.Interfaces;
using Infra.Context;
using MongoDB.Driver;

namespace Infra;

public class GenericRepository<TModel> where TModel: class, IMongoIdentity
{
    protected readonly IMongoCollection<TModel> DbSet;
    protected readonly IMongoDatabase Database;

    public GenericRepository(DbContext context, string collectionName)
    {
        DbSet = context.Database!.GetCollection<TModel>(collectionName);
        Database = context.Database;
    }

    public async Task<List<TModel>> GetAsync() =>
        await DbSet.Find(_ => true).ToListAsync();

    public async Task<TModel?> GetAsync(string id) =>
        await DbSet.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(TModel model) =>
        await DbSet.InsertOneAsync(model);

    public async Task UpdateAsync(string id, TModel model) =>
        await DbSet.ReplaceOneAsync(x => x.Id == id, model);

    public async Task RemoveAsync(string id) =>
        await DbSet.DeleteOneAsync(x => x.Id == id);
}