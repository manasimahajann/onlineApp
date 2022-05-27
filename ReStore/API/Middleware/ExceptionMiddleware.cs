using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        
            
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            Env = env;
            _env = env;
            _next = next;
            _logger = logger;
        }
        

        public async Task InvokeAsync(HttpContext context)
        { 
                try
                {
                    await _next(context);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, ex.Message);
                    context.Response.ContentType = "application/json";
                    context.Response.StatusCode = 500;
                    
                    var response = new ProblemDetails
                    {
                        Status = 500,
                        Detail = _env.IsDevelopement() ? ex.StackTrace?.ToString() : null,
                        Title = ex.Message
                    };
                    var options= new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

                    var json = JsonSerializer.Serialize(response, options);

                    await context.Response.WriteAsync(json);
                }


        }
    }
}