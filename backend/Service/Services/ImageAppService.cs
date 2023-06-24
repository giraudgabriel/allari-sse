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

    /// <summary>
    /// Get all images
    /// </summary>
    /// <returns>
    ///     <see cref="List{ImageDto}"/>
    /// </returns>
    public async Task<List<ImageDto>> GetAllImages()
    {
        var data = await Uow.ImageRepository!.GetAsync();

        return data.Select(x => new ImageDto(x.Id, x.Url, x.Name, x.ThumbnailUrl)).ToList();
    }
    
    /// <summary>
    /// Get image by id
    /// </summary>
    /// <param name="id">
    ///     <see cref="string"/>
    /// </param>
    /// <returns>
    ///     <see cref="ImageDto"/>
    /// </returns>
    public async Task<ImageDto?> GetById(string id)
    {
        var data = await Uow.ImageRepository!.GetAsync(id);

        return data is null ? null : new ImageDto(data.Id, data.Url, data.Name, data.ThumbnailUrl);
    }

    
    /// <summary>
    /// Add image
    /// </summary>
    /// <param name="imageDto">
    ///     <see cref="ImageDto"/>
    /// </param>
    /// <returns>
    ///     <see cref="Image"/>
    /// </returns>
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
    
    /// <summary>
    /// Remove image
    /// </summary>
    /// <param name="id">
    ///     <see cref="string"/>
    /// </param>
    /// <returns></returns>
    public async Task RemoveImage(string id)
    {
        await Uow.ImageRepository.RemoveAsync(id);
    }
}