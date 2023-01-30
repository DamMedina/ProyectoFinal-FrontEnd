
const boton = document.querySelector('#boton');
const boton2 = document.querySelector('#estudios');
const boton3 = document.querySelector('#exp');
const boton4 = document.querySelector('#habilidades');
const boton5 = document.querySelector('#ocultar');
const boton6 = document.querySelector('#vertodo');




/*habilidades*/

const idiom = document.querySelector('#idiom');
const software = document.querySelector('#software');
const otros = document.querySelector('#otros');



const ver_habilidades = async() => {
    try{
    let max = 10;
    let min = 1;
    let ram = Math.floor((Math.random()*(max - min + 1)) + min);
    console.log('se buscará el registro num: '+ram);
    const dir_estudios = 'estudios.json';
const respuesta = await fetch(dir_estudios)
const results = await respuesta.json();
const datos_estudios = results[ram];
console.log(datos_estudios);

idiom.textContent = datos_estudios.habilidades.idiomas;
software.textContent = datos_estudios.habilidades.software;
otros.textContent = datos_estudios.habilidades.otros;

document.getElementById('seccion_habilidades').style.display = 'block';
document.getElementById('seccion_exp').style.display = 'none';
document.getElementById('seccion_estudios').style.display = 'none';

} catch (error) {
    console.log(error);
}}



/*exp laboral*/

const trabajo1_nombre= document.querySelector('#trabajo1_nombre');
const t1_años = document.querySelector('#t1_años');
const trabajo1_dir = document.querySelector('#trabajo1_dir');
const trabajo1_alt = document.querySelector('#trabajo1_alt');
const trabajo1_ciudad=document.querySelector('#trabajo1_ciudad');
const trabajo1_prov=document.querySelector('#trabajo1_prov');
const trabajo1_pais=document.querySelector('#trabajo1_pais');
const trabajo1_puesto=document.querySelector('#trabajo1_puesto');
const trabajo1_info=document.querySelector('#trabajo1_info');

const trabajo2_nombre= document.querySelector('#trabajo2_nombre');
const t2_años = document.querySelector('#t2_años');
const trabajo2_dir = document.querySelector('#trabajo2_dir');
const trabajo2_alt = document.querySelector('#trabajo2_alt');
const trabajo2_ciudad=document.querySelector('#trabajo2_ciudad');
const trabajo2_prov=document.querySelector('#trabajo2_prov');
const trabajo2_pais=document.querySelector('#trabajo2_pais');
const trabajo2_puesto=document.querySelector('#trabajo2_puesto');
const trabajo2_info=document.querySelector('#trabajo2_info');


const ver_exp = async() => {
    try{
    let max = 10;
    let min = 1;
    let ram = Math.floor((Math.random()*(max - min + 1)) + min);
    console.log('se buscará el registro num: '+ram);
    const dir_estudios = 'estudios.json';
const respuesta = await fetch(dir_estudios)
const results = await respuesta.json();
const datos_estudios = results[ram];
console.log(datos_estudios);

document.getElementById('seccion_exp').style.display = 'block';

trabajo1_nombre.textContent = datos_estudios.Exp_Laboral.trabajo_1.Nombre;
t1_años.textContent = datos_estudios.Exp_Laboral.trabajo_1.Años_Trabajados;
trabajo1_puesto.textContent = datos_estudios.Exp_Laboral.trabajo_1.Puesto;
trabajo1_info.textContent = datos_estudios.Exp_Laboral.trabajo_1.Info;
trabajo1_dir.textContent = datos_estudios.Exp_Laboral.trabajo_1.street;
trabajo1_alt.textContent = datos_estudios.Exp_Laboral.trabajo_1.suite;
trabajo1_ciudad.textContent = datos_estudios.Exp_Laboral.trabajo_1.city;
trabajo1_prov.textContent = datos_estudios.Exp_Laboral.trabajo_1.Provincia;
trabajo1_pais.textContent = datos_estudios.Exp_Laboral.trabajo_1.Pais;

trabajo2_nombre.textContent = datos_estudios.Exp_Laboral.trabajo_2.Nombre;
t2_años.textContent = datos_estudios.Exp_Laboral.trabajo_2.Años_Trabajados;
trabajo2_puesto.textContent = datos_estudios.Exp_Laboral.trabajo_2.Puesto;
trabajo2_info.textContent = datos_estudios.Exp_Laboral.trabajo_2.Info;
trabajo2_dir.textContent = datos_estudios.Exp_Laboral.trabajo_2.street;
trabajo2_alt.textContent = datos_estudios.Exp_Laboral.trabajo_2.suite;
trabajo2_ciudad.textContent = datos_estudios.Exp_Laboral.trabajo_2.city;
trabajo2_prov.textContent = datos_estudios.Exp_Laboral.trabajo_2.Provincia;
trabajo2_pais.textContent = datos_estudios.Exp_Laboral.trabajo_2.Pais;






document.getElementById('seccion_estudios').style.display = 'none';
document.getElementById('seccion_habilidades').style.display = 'none';

} catch (error) {
    console.log(error);
}}






/*estudios*/

const primaria_nombre= document.querySelector('#primaria_nombre');
const p_años = document.querySelector('#p_años');
const primaria_dir = document.querySelector('#primaria_dir');
const primaria_alt = document.querySelector('#primaria_alt');
const primaria_ciudad=document.querySelector('#primaria_ciudad');
const primaria_prov=document.querySelector('#primaria_prov');
const primaria_pais=document.querySelector('#primaria_pais');

const secundaria_nombre = document.querySelector('#secundaria_nombre');
const s_años = document.querySelector('#s_años');
const secundaria_dir = document.querySelector('#secundaria_dir');
const secundaria_alt = document.querySelector('#secundaria_alt');
const secundaria_ciudad=document.querySelector('#secundaria_ciudad');
const secundaria_prov=document.querySelector('#secundaria_prov');
const secundaria_pais=document.querySelector('#secundaria_pais');

const u_nombre = document.querySelector('#u_nombre');
const u_años = document.querySelector('#u_años');
const univ_dir = document.querySelector('#univ_dir');
const univ_alt = document.querySelector('#univ_alt');
const univ_ciudad=document.querySelector('#univ_ciudad');
const univ_prov=document.querySelector('#univ_prov');
const univ_pais=document.querySelector('#univ_pais');

const ver_estudios = async() => {
        try{
        let max = 10;
        let min = 1;
        let ram = Math.floor((Math.random()*(max - min + 1)) + min);
        console.log('se buscará el registro num: '+ram);
        const dir_estudios = 'estudios.json';
    const respuesta = await fetch(dir_estudios)
    const results = await respuesta.json();
    const datos_estudios = results[ram];
    console.log(datos_estudios);

    document.getElementById('seccion_estudios').style.display = 'block';
    
    primaria_nombre.textContent = datos_estudios.Primaria.Nombre;
    p_años.textContent = datos_estudios.Primaria.Años_Cursados;
    primaria_dir.textContent = datos_estudios.Primaria.street;
    primaria_alt.textContent = datos_estudios.Primaria.suite;
    primaria_ciudad.textContent = datos_estudios.Primaria.city;
    primaria_prov.textContent = datos_estudios.Primaria.Provincia;
    primaria_pais.textContent = datos_estudios.Primaria.Pais;

   
    secundaria_nombre.textContent = datos_estudios.Secundaria.Nombre;
    s_años.textContent = datos_estudios.Secundaria.Años_Cursados;
    secundaria_dir.textContent = datos_estudios.Secundaria.street;
    secundaria_alt.textContent = datos_estudios.Secundaria.suite;
    secundaria_ciudad.textContent = datos_estudios.Secundaria.city;
    secundaria_prov.textContent = datos_estudios.Secundaria.Provincia;
    secundaria_pais.textContent = datos_estudios.Secundaria.Pais;


    u_nombre.textContent = datos_estudios.Terciario.Nombre;
    u_años.textContent = datos_estudios.Terciario.Años_Cursados;
    univ_dir.textContent = datos_estudios.Terciario.street;
    univ_alt.textContent = datos_estudios.Terciario.suite;
    univ_ciudad.textContent = datos_estudios.Terciario.city;
    univ_prov.textContent = datos_estudios.Terciario.Provincia;
    univ_pais.textContent = datos_estudios.Terciario.Pais;


    document.getElementById('seccion_exp').style.display = 'none';
    document.getElementById('seccion_habilidades').style.display = 'none';




    } catch (error) {
        console.log(error);
    }}







/*Perfiles*/
const picture = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const nacionalidad = document.querySelector('#nacionalidad');
const edad = document.querySelector('#edad');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const direccion = document.querySelector('#direccion');
const altura = document.querySelector('#altura');
const city = document.querySelector('#city');
const prov = document.querySelector('#prov');
const CP = document.querySelector('#CP');
const pais = document.querySelector('#pais');
const celu = document.querySelector('#celu');
let contador = 0;

const ver_usuarios = async() => {
    try {
    console.log('cargando perfiles..');
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    console.log(datos);



   boton.textContent="Ver Otro Perfil";
   picture.src = datos.picture.medium;
   nombre.textContent = datos.name.first;
   apellido.textContent = datos.name.last;
   edad.textContent = datos.dob.age;
   email.textContent = datos.email;
   telefono.textContent = datos.phone;
   celu.textContent = datos.cell;
   direccion.textContent = datos.location.street.name;
   altura.textContent = datos.location.street.number;
   city.textContent = datos.location.city;
   prov.textContent = datos.location.state;
   CP.textContent = datos.location.postcode;
   pais.textContent = datos.location.country;
   nacionalidad.textContent = datos.nat;


   document.getElementById('perfiles').style.display = 'block';
   document.getElementById('seccion_estudios').style.display = 'none';
   document.getElementById('seccion_exp').style.display = 'none';
    document.getElementById('seccion_habilidades').style.display = 'none';




} catch (error) {
    console.log(error);
}
}


/*botones*/
boton.addEventListener('click',ver_usuarios);






boton2.addEventListener('click',ver_estudios,
document.getElementById('seccion_exp').style.display = 'none',
document.getElementById('seccion_habilidades').style.display = 'none',
);

boton3.addEventListener('click',ver_exp,
document.getElementById('seccion_estudios').style.display = 'none',
document.getElementById('seccion_habilidades').style.display = 'none');

boton4.addEventListener('click',ver_habilidades,
document.getElementById('seccion_exp').style.display = 'none',
document.getElementById('seccion_estudios').style.display = 'none');



boton5.addEventListener('click', function (){
    console.log("Ocultar Todo")
    document.getElementById('seccion_estudios').style.display = 'none';
    document.getElementById('seccion_exp').style.display = 'none';
    document.getElementById('seccion_habilidades').style.display = 'none';
});








/*fetch('https://randomuser.me/api/')
     *   .then(response => response.json())
        .then(json => console.log(json))
    
    let URL = 'https://randomuser.me/api/';
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))*/