// 1. CONTADOR DE PERSONAS
// Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
// Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
// Cantidad de personas: 12
// Cantidad de hombres: 5
// Cantidad de mujeres: 7

import GrupoPersonas from "./classes/grupoPersonas.js";
import Persona from "./classes/persona.js";

let _persona1=new Persona("Luisa","f");
let _persona2=new Persona("Ana","f");
let _persona3=new Persona("Jose","M");
let _persona4=new Persona("Carmen","F");
let _persona5=new Persona("Rosa","F");
let _persona6=new Persona("Jose","M");
let _persona7=new Persona("Maria","F");
let _persona8=new Persona("Luz","F");
let _persona9=new Persona("Rafael","m");
let _persona10=new Persona("Liz","F");
let _persona11=new Persona("Marcos","M");
let _persona12=new Persona("Leo","m");

let _grupo=new GrupoPersonas()

_grupo.procesarPersona(_persona1)
_grupo.procesarPersona(_persona2)
_grupo.procesarPersona(_persona3)
_grupo.procesarPersona(_persona4)
_grupo.procesarPersona(_persona5)
_grupo.procesarPersona(_persona6)
_grupo.procesarPersona(_persona7)
_grupo.procesarPersona(_persona8)
_grupo.procesarPersona(_persona9)
_grupo.procesarPersona(_persona10)
_grupo.procesarPersona(_persona11)
_grupo.procesarPersona(_persona12)



document.body.innerHTML=`
<br>
Cantidad de personas: ${_grupo.contPersonas}
<br>
Cantidad de hombres: ${_grupo.contHombres}
<br>
Cantidad de mujeres: ${_grupo.contMujeres} 


`