using SiteForSalesTrees.Models;

namespace SiteForSalesTrees.Interfaces
{
    public interface ICategory
    {
        IEnumerable<Category> AllCategories { get; }
    }
}
