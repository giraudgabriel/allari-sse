using Application.Services;
using CrossCutting.DTOs.Image;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("image")]
public class ImageController : ControllerBase
{
    private readonly ImageAppService _imageAppService;
    public ImageController(ImageAppService imageAppService)
    {
        _imageAppService = imageAppService;
    }

    [HttpGet("all", Name = "Get All Images"),]
    public async Task<IEnumerable<ImageDto>> GetAll()
    {
        return await _imageAppService.GetAllImages();
    }
}
