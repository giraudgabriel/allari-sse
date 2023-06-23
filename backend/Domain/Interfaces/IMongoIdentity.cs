using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Interfaces;

public interface IMongoIdentity
{
    public string? Id { get; set; }  
}