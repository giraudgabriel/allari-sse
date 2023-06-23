using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Application
{
    public class ConfigureAppService
    {
        /// <summary>
        /// Configure all services
        /// </summary>
        /// <param name="services"></param>
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
