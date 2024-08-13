/*using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backTreesSales.Data;
using backTreesSales.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backTreesSales.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditArticlesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EditArticlesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/editarticles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<articles>>> GetArticles()
        {
            return await _context.articles.ToListAsync();
        }

        // GET: api/editarticles/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<articles>> GetArticle(int id)
        {
            var article = await _context.articles.FindAsync(id);

            if (article == null)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Error in EditArticlesController. NOT FOUND");
                return NotFound();
            }

            return article;
        }

        // PUT: api/editarticles/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArticle(int id, articles article)
        {
            if (id != article.id)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Error in EditArticlesController. BAD REQUEST");
                return BadRequest();
            }

            _context.Entry(article).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(id))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Error in EditArticlesController. NOT FOUND");
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($"The article {article.title} has been edited");
            return NoContent();
        }

        private bool ArticleExists(int id)
        {
            return _context.articles.Any(e => e.id == id);
        }
    }
}
*/