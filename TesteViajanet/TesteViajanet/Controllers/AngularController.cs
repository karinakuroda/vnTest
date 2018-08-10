using System.Web.Mvc;

namespace Viabilidade.Controllers
{
    [AllowAnonymous]
    public class AngularController : Controller
    {
        [HttpGet]
        public ActionResult Get(string tela, string viewName)
        {
            return View("~/App/components/"+ tela + "/" + viewName + ".cshtml");
        }
	}
}