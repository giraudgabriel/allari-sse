using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Infra
{
    public class ConfigureServiceRepository
    {
        public static void Configure(IServiceCollection services)
        {
            var assemblyToScan = Assembly.GetExecutingAssembly();
            foreach (var type in assemblyToScan.ExportedTypes)
            {
                if (type is { IsAbstract: false, IsGenericType: false } && type.Name.EndsWith("Repository"))
                    services.AddScoped(type);
            }
        }
    }
}
