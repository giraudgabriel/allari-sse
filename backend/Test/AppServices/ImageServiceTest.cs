using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Services;
using CrossCutting.Classes;
using CrossCutting.DTOs.Image;
using Domain.Models;
using Infra;
using Infra.Repositories;
using Moq;
using Test.Utils;
using Xunit;

namespace Test.AppServices;

public class ImageServiceTest
{
    private const string AllariLogoUrl = "https://allari.com/wp-content/uploads/2022/07/85787c291b7950f757a92e479361e548.png";

    private static readonly ImageDto ImageDto = new(null, AllariLogoUrl, "Allari Logo", AllariLogoUrl);

    /// <summary>
    /// Setup app service
    /// </summary>
    /// <returns></returns>
    private static ImageAppService SetupAppService()
    {
        var context = DbFactory.Context;
        
        Assert.NotNull(context);
        
        var mockServiceProvider = new Mock<IServiceProvider>();
        
        //setup mock to return ImageRepository new instance
        mockServiceProvider.Setup(x => x.GetService(typeof(ImageRepository)))
            .Returns(new ImageRepository(context!));
        
        var service = new ImageAppService(new UnitOfWork(context!, mockServiceProvider.Object));
        return service;
    }
    
    /// <summary>
    /// Validate image create, search and delete
    /// </summary>
    /// <returns></returns>
    [Fact]
    public async Task ValidateImageCreateSearchDelete()
    {
        var service = SetupAppService();
        
        var image = await service.AddImage(ImageDto);
        
        Assert.NotNull(image);
        Assert.NotNull(image?.Id);
        Assert.IsType<Image>(image);


        if (image?.Id == null) return;
        
        
        var search = await service.GetById(image.Id);
        
        Assert.IsType<ImageDto>(search);
        Assert.NotNull(search);
        
        await service.RemoveImage(image.Id);
        
        var deleted = await service.GetById(image.Id);
        
        Assert.Null(deleted);

    }
    
    /// <summary>
    /// Validate image get all
    /// </summary>
    /// <returns></returns>
    [Fact]
    public async Task ValidateImagesGetAll()
    {
        var service = SetupAppService();
        
        var images = await service.GetAllImages();
        
        Assert.NotNull(images);
        Assert.IsType<List<ImageDto>>(images);
    }
}