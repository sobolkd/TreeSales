namespace SiteForSalesTrees.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDesc { get; set; }
        public string CategoryImg { get; set; }
        public List<ChristmasTree> ChristmasTree { get; set; }
    }
}
