using Domain.Models;
using Infra.Context;
using MongoDB.Driver;

namespace Infra.Repositories;

public class ImageRepository : GenericRepository<Image>
{
    public ImageRepository(DbContext? db) : base(db, nameof(Image))
    {
    }
}