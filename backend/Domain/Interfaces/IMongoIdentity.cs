using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Interfaces;

/// <summary>
/// MongoDb identity
/// </summary>
public interface IMongoIdentity
{
    /// <summary>
    /// Id
    /// </summary>
    /// <value></value>
    public string? Id { get; set; }  
}