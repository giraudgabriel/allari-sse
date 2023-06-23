using CrossCutting.DTOs.Image;
using Infra;

namespace Application.Services;

public class ImageAppService: GenericAppService
{
    public ImageAppService(UnitOfWork uow) : base(uow)
    {
    }

    public async Task<List<ImageDto>> GetAllImages()
    {
        var data = await Uow.ImageRepository!.GetAsync();

        return data.Select(x => new ImageDto(x.Url, x.Name, x.ThumbnailUrl)).ToList();
    }
}