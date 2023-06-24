using Infra.Context;

namespace Test.Utils;

public static class DbFactory
{
    /// <summary>
    /// Static constructor
    /// </summary>
    static DbFactory()
    {
        Context = new DbContext("mongodb+srv://allari:FhOqjGW9i3am5tgF@allari-se.5bdtxum.mongodb.net/?retryWrites=true&w=majority", "allari");
    }

    public static DbContext? Context { get; }
}