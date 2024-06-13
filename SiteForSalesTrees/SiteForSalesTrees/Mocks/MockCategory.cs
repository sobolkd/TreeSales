using SiteForSalesTrees.Interfaces;
using SiteForSalesTrees.Models;

namespace SiteForSalesTrees.Mocks
{
    public class MockCategory : ICategory
    {
        public IEnumerable<Category> AllCategories
        {
            get
            {
                return new List<Category>
                {
                    new Category { CategoryName = "Ялинки", CategoryDesc = "Найкращі ялинки України"},
                    new Category { CategoryName = "Сосни", CategoryDesc = "Найкращі сосни України"}
                };
            }
        }
    }
}
