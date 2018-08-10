using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TesteViajanet
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            
            routes.MapRoute(
             name: "Angular App Views",
             url: "app/components/{tela}/{viewName}/html",
             defaults:
                 new
                 {
                     controller = "Angular",
                     action = "Get",
                     tela = UrlParameter.Optional,
                     viewName = UrlParameter.Optional
                     
                 }
             );



            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
