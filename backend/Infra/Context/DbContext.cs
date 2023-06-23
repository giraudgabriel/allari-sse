using CrossCutting.Classes;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Infra.Context;

public class DbContext
{
    public IMongoDatabase? Database { get; private set; }
    public IMongoClient Client { get; private set; }
    public DbContext(IOptions<MongoDbConfig> db): this(db.Value.ConnectionString, db.Value.DatabaseName)
    {
    }
    public DbContext(string connectionString, string databaseName)
    {
        Client = new MongoClient(connectionString);
        Database = Client.GetDatabase(databaseName);
    }
}