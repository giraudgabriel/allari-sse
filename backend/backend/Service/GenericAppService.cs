using Infra;
using Newtonsoft.Json;

namespace Application;

public class GenericAppService
{
    protected readonly UnitOfWork Uow;

    public GenericAppService(UnitOfWork uow)
    {
        Uow = uow;
    }
    
    public static string ToJson(object obj) => JsonConvert.SerializeObject(obj);

}