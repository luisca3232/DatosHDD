namespace DatosHDD.Models
{
    public class DriverDTO
    {
        //public string? disco { get; set; }
        public string? etiqueta { get; set; }

        public string? unidad { get; set; }
        
        public string? sistema_archivos { get; set; }
        public long Espacio_disponible { get; set; }
        public long Espacio_todal { get; set; }

       

        public long Espacio_todal_de_unidad { get; set; }
    }
}
