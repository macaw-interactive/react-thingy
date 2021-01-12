﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.App.Api.Models;
using Web.App.Api.Repository;
using Web.Core.WebApi.Controllers;

namespace Web.App.Api
{
    [Route("api/starwars")]
    [ApiController]
    public class StarWarsController : ApiControllerBase
    {
        private readonly IStarWarsRepository _starWarsRepository;

        public StarWarsController(IStarWarsRepository starWarsRepository)
        {
            _starWarsRepository = starWarsRepository;
        }

        [HttpGet("people")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(StarWarsPerson[]), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetPeople(string query)
        {
            var filterPath = String.IsNullOrWhiteSpace(query) ? "?page=1" : $"?search={query}";
            var result = await _starWarsRepository.ExecuteQuery(filterPath);

            if (result != null)
            {
                return Ok(result);
            }

            return Problem("Something went wrong getting Star Wars data");
        }

        [HttpGet("people/{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(StarWarsPerson[]), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetPersonById(int id)
        {
            var result = await _starWarsRepository.GetStarWarsPerson(id);
            if (result != null)
            {
                return Ok(result);
            }

            return Problem("Something went wrong getting Star Wars data");
        }
    }
}
