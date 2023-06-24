using Domain.Interfaces;
using Infra.Context;
using MongoDB.Driver;

namespace Infra;

public class GenericRepository<TModel> where TModel: class, IMongoIdentity
{
    /// <summary>
    /// MongoDb collection
    /// </summary>
    protected readonly IMongoCollection<TModel> DbSet;
    /// <summary>
    /// MongoDb database
    /// </summary>
    protected readonly IMongoDatabase Database;

    public GenericRepository(DbContext context, string collectionName)
    {
        DbSet = context.Database!.GetCollection<TModel>(collectionName);
        Database = context.Database;
    }

    /// <summary>
    /// Get all
    /// </summary>
    /// <returns>
    ///     <see cref="List{TModel}"/>
    /// </returns>
    public async Task<List<TModel>> GetAsync() =>
        await DbSet.Find(_ => true).ToListAsync();

    /// <summary>
    /// Get by id
    /// </summary>
    /// <param name="id">
    ///     <see cref="string"/>
    /// </param>
    /// <returns>
    ///     <see cref="TModel"/>
    /// </returns>
    public async Task<TModel?> GetAsync(string id) =>
        await DbSet.Find(x => x.Id == id).FirstOrDefaultAsync();

    /// <summary>
    /// Create
    /// </summary>
    /// <param name="model">
    ///     <see cref="TModel"/>
    /// </param>
    /// <returns>
    ///     <see cref="Task"/>
    /// </returns>
    public async Task CreateAsync(TModel model) =>
        await DbSet.InsertOneAsync(model);

    /// <summary>
    /// Update
    /// </summary>
    /// <param name="id">
    ///     <see cref="string"/>
    /// </param>
    /// <param name="model">
    ///     <see cref="TModel"/>
    /// </param>
    /// <returns>
    ///     <see cref="Task"/>
    /// </returns>
    public async Task UpdateAsync(string id, TModel model) =>
        await DbSet.ReplaceOneAsync(x => x.Id == id, model);

    /// <summary>
    /// Remove
    /// </summary>
    /// <param name="id">
    ///     <see cref="string"/>
    /// </param>
    /// <returns>
    ///     <see cref="Task"/>
    /// </returns>
    public async Task RemoveAsync(string id) =>
        await DbSet.DeleteOneAsync(x => x.Id == id);
}