using System.IO;
using Microsoft.AspNetCore.Mvc;
using DatosHDD;
using DatosHDD.Models;


namespace DatosHDD.clases
{
    public class driver
    {
        public driver() { }

        public List<DriverDTO> getInfo()
        {
            List<DriverDTO> lista = new List<DriverDTO>();
            DriveInfo[] allDrives= DriveInfo.GetDrives();

            foreach(DriveInfo d in allDrives)
            {
                DriverDTO dt= new DriverDTO();

                //dt.disco = d.Name;
                dt.etiqueta = d.VolumeLabel.ToString();
                dt.unidad=d.DriveType.ToString();
                
                dt.sistema_archivos=d.DriveFormat.ToString();
                dt.Espacio_disponible = (long)(d.AvailableFreeSpace / 1073741824.0);
                dt.Espacio_todal = (long)(d.TotalFreeSpace / 1073741824.0);
                dt.Espacio_todal_de_unidad = (long)(d.TotalSize / 1073741824.0);
                
              

                lista.Add(dt);
            }

            return lista;
        }
    }
}
