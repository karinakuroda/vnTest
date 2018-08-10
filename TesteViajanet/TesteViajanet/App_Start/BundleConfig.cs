using System.Web;
using System.Web.Optimization;

namespace TesteViajanet
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            //BundleTable.EnableOptimizations = false;
            
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
             "~/Scripts/angular/angular.js",
             "~/Scripts/angular/angular-animate.js",
             "~/Scripts/angular/angular-cookies.min.js",
             "~/Scripts/angular/angular-route.js",
             "~/Scripts/angular/angular-sanitize.js",
             "~/Scripts/angular/angular-resource.js"
             ));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));
            
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/assets/css/normalize.css",
                      "~/assets/css/site.css"));
            
            bundles.Add(new ScriptBundle("~/bundles/ViajanetApp")
                .IncludeDirectory("~/app/components/index", "*.js")
                 .IncludeDirectory("~/app/components/gitSearch", "*.js")
                .IncludeDirectory("~/app/components/gitDetail", "*.js")
                .Include("~/app/ViajanetApp.js")
                .Include("~/app/config.route.js")
                
                );
        }
    }
}
