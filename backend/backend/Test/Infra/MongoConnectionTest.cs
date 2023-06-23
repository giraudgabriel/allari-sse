using CrossCutting.DTOs.Image;
using Infra.Context;
using MongoDB.Bson;
using MongoDB.Driver;
using Xunit;

namespace Test.Infra;

public class MongoConnectionTest
{
    private const string ConnectionString ="mongodb://localhost:27017";
    private const string DbName = "allari";
    
    [Fact]
    public static DbContext TryGetMongoConnection()
    {
        var context = new DbContext(ConnectionString, DbName);
        
        Assert.NotNull(context.Client);
        Assert.NotNull(context.Database);

        var isPing = context.Database?.RunCommandAsync((Command<BsonDocument>)"{ping:1}")!.Wait(1000);
        
        Assert.True(isPing);

        return context;
    }
}