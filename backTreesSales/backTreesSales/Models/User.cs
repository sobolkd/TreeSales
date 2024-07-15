using System.ComponentModel.DataAnnotations.Schema;

[Table("users")]
public class User
{
    public int id { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public string user_name { get; set; }
    public string user_pastname { get; set; }
}
