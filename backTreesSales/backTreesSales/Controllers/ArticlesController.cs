using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backTreesSales.Data;
using backTreesSales.Models;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class ArticlesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ArticlesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<articles>>> GetArticles()
    {
        return await _context.articles.ToListAsync();
    }

    [HttpPost]
    public async Task<IActionResult> PostArticle([FromBody] articles article)
    {
        if (article == null || !ModelState.IsValid)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Error in ArticlesController. BAD REQUEST");
            return BadRequest("Invalid article data.");
        }

        _context.articles.Add(article);
        await _context.SaveChangesAsync();
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine($"The article {article.title} added successfully");
        return Ok(new { message = "Article added successfully" });
    }


}
