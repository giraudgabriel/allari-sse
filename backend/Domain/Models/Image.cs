using Domain.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Models;

/// <summary>
/// Image
/// </summary>
public class Image : IMongoIdentity
{
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Name { get; set; } = null!;
    public string Url { get; set; } = null!;
    public string ThumbnailUrl { get; set; } = null!;
    public DateTime? CreatedAt { get; set; } = null!;
}