using Ecomerce.API.Controllers;
using Ecomerce.API.Extensions;
using Ecomerce.BL;
using Ecomerce.BL.Implementations;
using Ecomerce.BL.Utility.Jwt;
using Ecomerce.DAL;
using Ecomerce.DAL.Context;
using Ecomerce.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();

builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(nameof(JwtOptions)));

builder.Services.AddApiAuthentication(builder.Configuration);
builder.Services.AddBl();
builder.Services.AddDal();
builder.Services.AddTransient<UserRepository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientPermission", policy =>
    {
        policy.AllowAnyHeader()
            .AllowAnyMethod()
            .SetIsOriginAllowed(_ => true)
            .AllowCredentials();
    });
});

var app = builder.Build();
using var scope = app.Services.CreateScope();
await using var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
dbContext.Database.EnsureDeleted();
dbContext.Database.EnsureCreated();
app.UseCors("ClientPermission");

app.UseDeveloperExceptionPage();

app.UseSwagger();
app.UseSwaggerUI();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.MapGet("test", () => Results.Ok()).RequireAuthorization("AdminPolicy");

app.UseHttpsRedirection();

app.Run();
