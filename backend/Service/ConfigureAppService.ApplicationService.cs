using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Application
{
    public class ConfigureAppService
    {
        public static void Configure(IServiceCollection services)
        {
            var assemblyToScan = Assembly.GetExecutingAssembly();
            foreach (var type in assemblyToScan.ExportedTypes)
            {
                services.AddScoped(type);
            }
        }
    }
}
