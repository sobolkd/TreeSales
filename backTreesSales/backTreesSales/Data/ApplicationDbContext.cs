using Microsoft.EntityFrameworkCore;
using backTreesSales.Models;

namespace backTreesSales.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<articles> articles { get; set; }
    }
}
