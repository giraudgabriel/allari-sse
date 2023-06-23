namespace CrossCutting.DTOs.Image;

/// <summary>
/// Image data transfer object
/// </summary>
/// <param name="Hash"></param>
/// <param name="Url"></param>
/// <param name="Name"></param>
/// <param name="Thumbnail"></param>
/// <returns></returns>
public record ImageDto(string? Hash, string Url, string Name, string Thumbnail);