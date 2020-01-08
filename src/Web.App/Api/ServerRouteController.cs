﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using Web.App.Api.Models;

namespace Web.App.Api
{
    [Route("api/serverroute")]
    public class ServerRouteController : Controller
    {
        /// <summary>
        /// Get routing information based on the Uri.
        /// </summary>
        /// <remarks>
        /// Determine at server-side what routing should be executed at client-side.
        /// </remarks>
        /// <param name="route">The route path to resolve.</param>
        /// <returns>The server determined routing information of type <see cref="ServerRouteData"/>.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(ServerRouteData), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<ServerRouteData> GetServerRoute([FromQuery] string route)
        {
            if (string.IsNullOrWhiteSpace(route))
            {

            }

            route = route.ToUpperInvariant();
            try
            {
                if (route == "MULTIPLA")
                {
                    return Ok(
                        new ServerRouteData
                        {
                            Type = PageType.CarPage,
                            CarData = new Car
                            {
                                Make = "Fiat",
                                Year = 1998,
                                Speed = 170
                            }
                        }
                    );
                }
                else if (route == "FORD/FIESTA")
                {
                    return Ok(
                        new ServerRouteData
                        {
                            Type = PageType.CarPage,
                            CarData = new Car
                            {
                                Make = "Ford",
                                Year = 1976,
                                Speed = 190
                            }
                        }
                    );
                }
                else if (route == "BEAR")
                {
                    return Ok(
                        new ServerRouteData
                        {
                            Type = PageType.AnimalPage,
                            AnimalData = new Animal
                            {
                                Name = "Bear",
                                MaxAge = 30
                            }
                        }
                     );
                }
                else
                {
                    return NotFound();
                }
            }
            catch (ServerRouteException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}