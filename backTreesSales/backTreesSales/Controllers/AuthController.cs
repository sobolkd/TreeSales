using Microsoft.AspNetCore.Mvc;
using backTreesSales.Models;
using backTreesSales.Data;

namespace backTreesSales.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationModel model)
        {
            if (model == null || !ModelState.IsValid)
            {
                return BadRequest("Invalid registration details.");
            }

            var user = new User
            {
                email = model.Email,
                password = model.Password,
                user_name = model.Username,
                user_pastname = model.UserPastname
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful" });
        }
    }
}
