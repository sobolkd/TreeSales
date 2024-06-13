using SiteForSalesTrees.Models;

namespace SiteForSalesTrees.Interfaces
{
    public interface IAllChristmasTree
    {
        IEnumerable<ChristmasTree> christmasTrees { get; }
        IEnumerable<ChristmasTree> getFacChrTree { get; }
        ChristmasTree getObjChrTree(int treeId);
    }
}
