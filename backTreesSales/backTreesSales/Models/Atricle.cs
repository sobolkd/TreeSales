using System.ComponentModel.DataAnnotations;

public class articles
{
    public int id { get; set; }

    [Required]
    public string title { get; set; }

    public DateTime date { get; set; }

    [Required]
    public string shorttext { get; set; }

    [Required]
    public string fulltext { get; set; }
}
