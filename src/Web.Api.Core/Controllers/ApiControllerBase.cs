﻿using Web.Api.Core.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Web.Api.Core.Exceptions;
using NSwag.Annotations;

namespace Web.Api.Core.Controllers
{
    public abstract class ApiControllerBase : ControllerBase
    {
        [OpenApiIgnore]
        public override BadRequestResult BadRequest()
        {
            throw new BadRequestException("BadRequest - reported using BadRequest(), but use BadRequest<ErrorDetailsVoid>() instead");
        }

        [OpenApiIgnore]
        public override BadRequestObjectResult BadRequest(object error)
        {
            throw new BadRequestException("BadRequest - reported using BadRequest(object error), but use BadRequest<ErrorDetailsObject>(object error) instead");
        }

        [OpenApiIgnore]
        public BadRequestObjectResult BadRequest(string error)
        {
            var problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status400BadRequest, error, HttpContext.TraceIdentifier);
            return base.BadRequest(problemDetails);
        }

        //[OpenApiIgnore]
        //new public BadRequestObjectResult BadRequest()
        //{
        //    var problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status400BadRequest, "Something went wrong while processing your request.", HttpContext.TraceIdentifier);
        //    return base.BadRequest(problemDetails);
        //}

        [OpenApiIgnore]
        public BadRequestObjectResult BadRequest<T>(T error) where T : ErrorDetails
        {
            var problemDetails = ProblemDetailsHelper.CreateProblemDetails<T>(StatusCodes.Status400BadRequest, "Something went wrong while processing your request.", HttpContext.TraceIdentifier, error);
            return base.BadRequest(problemDetails);
        }

        [OpenApiIgnore]
        public override NotFoundObjectResult NotFound(object value = null)
        {
            ProblemDetails problemDetails;
            if (value == null)
            {
                problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status404NotFound, "The object could not be found.", HttpContext.TraceIdentifier);
            }
            else
            {
                problemDetails = ProblemDetailsHelper.CreateProblemDetails<ErrorDetailsObject>(StatusCodes.Status404NotFound, "The object could not be found.", HttpContext.TraceIdentifier, new ErrorDetailsObject { Value = JsonConvert.SerializeObject(value) });

            }
            return base.NotFound(problemDetails);
        }

        [OpenApiIgnore]
        public override ConflictObjectResult Conflict(object value = null)
        {
            ProblemDetails problemDetails;
            if (value == null)
            {
                problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status409Conflict, "The object conflicts.", HttpContext.TraceIdentifier);
            }
            else { problemDetails = ProblemDetailsHelper.CreateProblemDetails<ErrorDetailsObject>(StatusCodes.Status409Conflict, "The object conflicts.", HttpContext.TraceIdentifier, new ErrorDetailsObject { Value = JsonConvert.SerializeObject(value) }); }
            return base.Conflict(problemDetails);
        }

        [OpenApiIgnore]
        public ConflictObjectResult Conflict<T>(T value) where T : ErrorDetails
        {
            var problemDetails = ProblemDetailsHelper.CreateProblemDetails<T>(StatusCodes.Status409Conflict, "The object conflicts.", HttpContext.TraceIdentifier, value);
            return base.Conflict(problemDetails);
        }

        [OpenApiIgnore]
        public override UnauthorizedResult Unauthorized()
        {
            throw new BadRequestException("Unauthorized - reported using Unauthorized(), but use Unauthorized<ErrorDetailsVoid>() instead");
        }

        [OpenApiIgnore]
        public override UnauthorizedObjectResult Unauthorized(object value = null)
        {
            ProblemDetails problemDetails;
            if (value == null)
            {
                problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status401Unauthorized, "Unauthorized.", HttpContext.TraceIdentifier);
            }
            else { problemDetails = ProblemDetailsHelper.CreateProblemDetails<ErrorDetailsObject>(StatusCodes.Status401Unauthorized, "Unauthorized.", HttpContext.TraceIdentifier, new ErrorDetailsObject { Value = JsonConvert.SerializeObject(value) }); }
            return base.Unauthorized(problemDetails);
        }

        [OpenApiIgnore]
        public UnauthorizedObjectResult Unauthorized(string error)
        {
            var problemDetails = ProblemDetailsHelper.CreateProblemDetails(StatusCodes.Status401Unauthorized, error, HttpContext.TraceIdentifier);
            return base.Unauthorized(problemDetails);
        }

        [OpenApiIgnore]
        public UnauthorizedObjectResult Unauthorized<T>(T value) where T : ErrorDetails
        {
            var problemDetails = ProblemDetailsHelper.CreateProblemDetails<T>(StatusCodes.Status401Unauthorized, "Unauthorized.", HttpContext.TraceIdentifier, value);
            return base.Unauthorized(problemDetails);
        }
    }
}