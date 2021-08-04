using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductDetails.Models;
using ProductDetails.Services;

namespace ProductDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _service;

        public UsersController(UserService service)
        {
            _service = service;
        }

        // GET: api/Users
        [HttpGet]
        public ActionResult<List<User>> GetUser()
        {
            return _service.Get();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(string id)
        {
            var user = _service.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult PutProduct(String id, User userIn)
        {
            var product = _service.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _service.Update(id, userIn);

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public ActionResult<User> PostUser(User user)
        {
            _service.Create(user);

            return CreatedAtAction("GetUser", new { id = user.Id.ToString() }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public ActionResult<User> DeleteUser(string id)
        {
            var user = _service.Get(id);
            if (user == null)
            {
                return NotFound();
            }

            _service.Remove(user);

            return user;
        }
    }
}
