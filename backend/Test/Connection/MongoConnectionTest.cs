using CrossCutting.Classes;
using CrossCutting.DTOs.Image;
using Infra.Context;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using Test.Utils;
using Xunit;

namespace Test.Connection;

public class MongoConnectionTest
{
    [Fact]
    public void TryGetMongoConnection()
    {
        var context = DbFactory.Context;
        
        Assert.NotNull(context);
        Assert.NotNull(context!.Client);
        Assert.NotNull(context.Database);

        //validate if server is alive
        var isPing = context.Database?.RunCommandAsync((Command<BsonDocument>)"{ping:1}")!.Wait(1000);
        
        Assert.True(isPing);
    }
}