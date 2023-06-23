using CrossCutting.DTOs.Image;
using Domain.Models;
using Infra;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Application.Services;

public class ImageAppService: GenericAppService
{
    public ImageAppService(UnitOfWork uow) : base(uow)
    {
    }

    public async Task<List<ImageDto>> GetAllImages()
    {
        var data = await Uow.ImageRepository!.GetAsync();

        return data.Select(x => new ImageDto(x.Id, x.Url, x.Name, x.ThumbnailUrl)).ToList();
    }
    
    public async Task<ImageDto?> GetById(string id)
    {
        var data = await Uow.ImageRepository!.GetAsync(id);

        if (data is null) return null;
        
        return new ImageDto(data.Id, data.Url, data.Name, data.ThumbnailUrl);
    }

    
    public async Task<Image?> AddImage(ImageDto imageDto)
    {
        var image = new Image
        {
            ThumbnailUrl = imageDto.Thumbnail,
            Name = imageDto.Name,
            Url = imageDto.Url,
            CreatedAt = DateTime.Now,
            Id = ObjectId.GenerateNewId().ToString()
        };
        
        await Uow.ImageRepository.CreateAsync(image);

        var created = await Uow.ImageRepository.GetAsync(image.Id);

        return created;
    }
    
    public async Task RemoveImage(string id)
    {
        await Uow.ImageRepository.RemoveAsync(id);
    }
}