﻿namespace CrossCutting.Classes;

public class MongoDbConfig
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
}