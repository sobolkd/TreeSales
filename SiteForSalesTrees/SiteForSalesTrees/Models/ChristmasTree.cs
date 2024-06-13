namespace SiteForSalesTrees.Models
{
    public class ChristmasTree
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LongDesc { get; set; }
        public string ShortDesc { get; set; }
        public string Img { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsFavorite { get; set; }
        public int CategoryId { get; set; }
        public ushort Price { get; set; }
        public virtual Category Category { get; set; }

    }
}
