using Microsoft.AspNetCore.Mvc;

namespace WebSite.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult AddProducts()
        {
            return View();
        }
        public IActionResult AddDocuments()
        {
            return View();
        }
        
    }
}
