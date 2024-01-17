var cadena = `<?xml version="1.0" encoding="UTF-8"?>
<cine>
   <película categoría="acción">
          <título idioma="inglés">Mad Max</título>
           <director>meencantaelpitoGeorge Miller</director>
           <estreno>15 mayo 2015</estreno>
           <reparto>Charlize Theron</reparto>
    </película>
    <película categoría="animación">
           <título idioma="inglés">Inside Out</título>
          <reparto>Amy Poehler</reparto>
</película>
</cine>`;

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(cadena, "text/xml");
alert(xmlDoc.getElementsByTagName("película").length); // Muestra 2
alert(xmlDoc.getElementsByTagName("título")[0].childNodes[0].nodeValue); // Muestra 'Mad Max'
alert(xmlDoc.getElementsByTagName("título")[0].attributes[0].nodeValue); // Muestra 'inglés'
alert(xmlDoc.getElementsByTagName("título")[0].getAttribute("idioma")); // Muestra 'inglés'
xmlDoc.getElementsByTagName("título")[0].childNodes[0].nodeValue = "Mad Max 2"; // Cambia el valor del nodo
xmlDoc.getElementsByTagName("título")[0].setAttribute("idioma", "francés"); // Cambia el valor del atributo
alert(
	xmlDoc.getElementsByTagName("película")[0].getElementsByTagName("reparto")[0]
		.childNodes[0].nodeValue
); // Con la línea anterior se muestra 'Charlize Theron'
var x = xmlDoc.getElementsByTagName("película")[0];
xmlDoc.documentElement.removeChild(x); // Borra el primer nodo 'película' y todos sus hijos.
var cine = xmlDoc.getElementsByTagName("cine")[0];
var peli = xmlDoc.createElement("película"); // Crea nodo película.
var tit = xmlDoc.createElement("título"); // Crea nodo título.
var textTit = xmlDoc.createTextNode("Mad Max3"); // Crea un nodo texto
tit.appendChild(textTit); // Añade el texto al título
peli.appendChild(tit); // Añade el título a la peli
cine.appendChild(peli); // Añade la peli al nodo raíz ‘cine’

