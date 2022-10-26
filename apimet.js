let mostrar = document.getElementById("mostrar")
let cuerpo = ""
lista = [3715,3716,3717,3718,3719,3720,3721,3722,3723,3724,3725,3726,3727,3728,3729]
async function conectarApi() {
    for(indice of lista){
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${indice}`)
        .then((response) => response.json())
        .then((data) => {
            let claves = Object.keys(data)
    
            for(let clave of claves){
                // console.log(clave)
                
                if (clave === "title"){
                    cuerpo += "<p>"+clave + ": " + data[`${clave}`] + "</p>"
                }
                else if(clave === "primaryImageSmall"){
                    cuerpo += "<p>"+clave + ": " + "<br><img src="+data[`${clave}`]+" alt="+ data["objectName"]+" width='100' height='100'/></p>"
                }
                
            }
        })
    }
    
    mostrar.innerHTML = cuerpo
}

conectarApi()

 /*  La idea original era hacer una primera llamada con una busqueda acotada, por ejemplo, elementos del
 antiguo cercano oriente, y luego con ese json ir mostrando el "title"(descripcion del objeto) y la imagen 
 correspondiente, pero no le encontramos la vuelta aun. Dejo esto para que vean cual era la idea inicial.
 
 let lista = fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=ancient%20near%20west")
        .then(Response => Response.json())
       
        console.log(lista);
        
        console.log(lista.objectIDs);
        console.log(lista.objectIDs[1]);*/