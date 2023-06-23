using System;
using System.Threading.Tasks;
using Application.Services;
using CrossCutting.DTOs.Image;
using Infra;
using Infra.Context;
using Infra.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;
using Moq;
using Test.Infra;
using Xunit;

namespace Test.Service;

public class ImageServiceTest
{
    private const string AllariLogoUrl =
        "https://allari.com/wp-content/uploads/2022/07/85787c291b7950f757a92e479361e548.png";

    private static readonly ImageDto ImageDto = new(AllariLogoUrl, "Allari Logo", AllariLogoUrl);
    
    [Fact]
    public async Task ValidateImagesGetAll()
    {
        var context = MongoConnectionTest.TryGetMongoConnection();
        var mockServiceProvider = new Mock<IServiceProvider>();
        
        //setup mock to return ImageRepository new instance
        mockServiceProvider.Setup(x => x.GetService(typeof(ImageRepository)))
            .Returns(new ImageRepository(context));
        
        var service = new ImageAppService(new UnitOfWork(context, mockServiceProvider.Object));
        var images = await service.GetAllImages();
        
        Assert.NotNull(images);
    }
}