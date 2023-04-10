using DatosHDD.clases;
using DatosHDD.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Diagnostics;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;

namespace DatosHDD.Controllers
{
    public class HomeController : Controller
    {
       

        

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
          return View();

           

        }


        public IActionResult Privacy()
        {
            return View();
        }

        public List<DriverDTO> GetDrivers()
        {

            driver driverdriver = new driver();
            var data = driverdriver.getInfo();


            return data;



        }






    }
}