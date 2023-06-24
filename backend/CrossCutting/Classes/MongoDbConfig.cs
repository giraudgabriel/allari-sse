namespace CrossCutting.Classes;

/// <summary>
/// MongoDb configuration
/// </summary>
public class MongoDbConfig
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
}