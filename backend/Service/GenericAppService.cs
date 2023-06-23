using Infra;
using Newtonsoft.Json;

namespace Application;

public class GenericAppService
{
    /// <summary>
    /// Unit of work instance used to access repositories
    /// </summary>
    protected readonly UnitOfWork Uow;

    public GenericAppService(UnitOfWork uow)
    {
        Uow = uow;
    }
    
    /// <summary>
    /// Convert object to json
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    public static string ToJson(object obj) => JsonConvert.SerializeObject(obj);

}