using backTreesSales.Data;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UpdateArticleController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UpdateArticleController(ApplicationDbContext context)
    {
        _context = context;
    }

    // DELETE api/updatearticle/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteArticle(int id)
    {
        var article = await _context.articles.FindAsync(id);

        if (article == null)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Error in DeleteArticle controller. NOT FOUND");
            return NotFound();
        }

        _context.articles.Remove(article);
        await _context.SaveChangesAsync();
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine($"The article {article.title} has been deleted");
        return NoContent();
    }
}
