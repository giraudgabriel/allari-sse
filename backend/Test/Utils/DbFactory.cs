using Infra.Context;

namespace Test.Utils;

public static class DbFactory
{
    /// <summary>
    /// Static constructor
    /// </summary>
    static DbFactory()
    {
        Context = new DbContext("mongodb://localhost:27017", "allari");
    }

    public static DbContext? Context { get; }
}