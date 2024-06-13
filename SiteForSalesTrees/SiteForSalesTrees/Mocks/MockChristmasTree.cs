using SiteForSalesTrees.Interfaces;
using SiteForSalesTrees.Models;

namespace SiteForSalesTrees.Mocks
{
    public class MockChristmasTree : IAllChristmasTree
    {
        private readonly ICategory _AllChristmasTree = new MockCategory();
        public IEnumerable<ChristmasTree> christmasTrees
        {
            get
            {
                return new List<ChristmasTree>
                {
                    new ChristmasTree { Name = "Ялинка звичайна", LongDesc=" Найкраща звичайна ялинка україни",
                        ShortDesc="ялинка ппц", Img="", IsAvailable=true, IsFavorite=true, Price=250, Category= _AllChristmasTree.AllCategories.First()},
                    new ChristmasTree { Name = "Сосна звичайна", LongDesc=" Найкраща звичайна сосна україни",
                        ShortDesc="сосна ппц", Img="", IsAvailable=true, IsFavorite=true, Price=250, Category= _AllChristmasTree.AllCategories.Last()}
                };
            }
        }
        public IEnumerable<ChristmasTree> getFacChrTree { get;set;}
        public ChristmasTree getObjChrTree(int treeId)
        {
            throw new NotImplementedException();
        }
    }
}
