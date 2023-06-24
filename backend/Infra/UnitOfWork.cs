using Infra.Context;
using Infra.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Infra;

public class UnitOfWork
{
    private DbContext? _dbContext;
    private readonly IServiceProvider _serviceProvider;
    
    public UnitOfWork(DbContext? dbContext, IServiceProvider serviceProvider)
    {
        _dbContext = dbContext;
        _serviceProvider = serviceProvider;
    }

    public ImageRepository ImageRepository => _serviceProvider.GetService<ImageRepository>();
}