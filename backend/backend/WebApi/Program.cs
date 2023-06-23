using Application;
using CrossCutting.Classes;
using Infra;
using Infra.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


#region Dependency Injection

// Add services to the container.
builder.Services.Configure<MongoDbConfig>(builder.Configuration.GetSection("Database"));

//Add db singleton
builder.Services.AddSingleton<DbContext>();
builder.Services.AddScoped<UnitOfWork>();
ConfigureServiceRepository.Configure(builder.Services);
ConfigureAppService.Configure(builder.Services);
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
