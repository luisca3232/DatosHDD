


document.addEventListener("DOMContentLoaded", () => {




    $.ajax({
        type: "GET",
        url: "/Home/GetDrivers",
        success: data => {
            
            console.log(data)
            /*titlearray.push(data[0].disco)*/

            //let tablaDinamica = `
            //                                                <caption> Servidor</caption>
            //                                                <thead>
            //                                                    <tr>
            //                                                            <td class="td13" style="border: 2px solid black !important; border-radius: 5px 0 0 0 ">disco</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">unidad</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">etiqueta</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">sistema_archivos</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">Espacio_disponible</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">Espacio_todal</td>
            //                                                            <td class="td13" style="border: 2px solid black !important;">Espacio_todal_de_unidad</td>

            //                                                    </tr>
            //                                                 </thead>`;

            //for (let i = 0; i < data2.length; i++) {

            //    tablaDinamica += `

            //                                            <tr>
            //                                                            <td><input class="td12" type="text" onclick="clicktabla()" disabled value="${data2[i].disco}" /></td>
            //                                                            <td><input class="td12" type="text" disabled value="${data2[i].unidad}" /></td>
            //                                                            <td><input class="td12" type="text" disabled value="${data2[i].etiqueta}" /></td>
            //                                                            <td><input class="td12" disabled value="${data2[i].sistema_archivos}" /></td>
            //                                                            <td><input class="td12" disabled value="${data2[i].Espacio_disponeble}" /></td>
            //                                                            <td><input class="td12" type="text" disabled value="${data2[i].Espacio_total}" /></td>
            //                                                            <td><input class="td12" type="text" disabled value="${data2[i].Espacio_total_unidad}" /></td>

            //                                            </tr>
            //                                            `;
            //}
            //document.getElementById("tabla2").innerHTML = tablaDinamica;  /// crea la tabla
            /*var data = [];*/
            var descriptionarray = ["",""];// aqui se supone que irian los datos  que se imprimen 
            /*titlearray.fill(100,"disco")*/
            var dynamic = document.querySelector('.containerLuis');
            dynamic.style.position = "absolute";
            for (var i = 0; i < data.length; i++) {
                dynamic.innerHTML +=
                    `<div id="cards${i}" class="boxes">
                      <div class="box-content">
                        <h4><strong>Nombre de Servidor:</strong><br> ${data[i].etiqueta}</h4>
                        <h5><strong>Undidad:</strong> ${data[i].unidad}</h5>
                        
                        <h5><strong>Sistema de archivos:</strong> ${data[i].sistema_archivos} </h5>
                        <h5><strong>Espacio disponible:</strong> ${data[i].espacio_disponible} GB</h5>
                        <h5><strong>Espacio total para uso :</strong> ${data[i].espacio_todal_de_unidad} GB</h5>
                        <h5><strong>Espacio total de unidad:</strong> ${data[i].espacio_todal} GB</h5>
                        
                        

                       
                        <a class="showmore" href="#">ReadMore</a>
                      </div>
                    </div>`;
               /* var bgimg = document.getElementById(`cards${i}`);*/
            //    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`; falla al traer las fotos por que estan eliminadas

                //<p>
                //    ${descriptionarray[i]}
                //</p>
            }
        },
        error: e => {
            console.log(e);
        },
    });

})