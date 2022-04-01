// Crea una lista de contactos con datos predefinidos, cada contacto debe contener
// el nombre y apellido como una sola cadena de caracteres
// {ubicacion:[{ciudad:'',direccion:''}]}},
const listContact = [
    {id:0,nombre:'Maria',apellido:'Ramos',telefono:78915400,ubicación:[{ciudad:'La Paz',dirección:'Bella Vista'}]},
    {id:1,nombre:'Sara',apellido:'Gallardo',telefono:78915400,ubicación:[{ciudad:'La Paz',dirección:'Bella Vista'}]},
    {id:3,nombre:'Edson',apellido:'Sosa',telefono:78915400,ubicación:[{ciudad:'La Paz',dirección:'Bella Vista'}]},
    {id:4,nombre:'Daniel',apellido:'Ticona',telefono:78915400,ubicación:[{ciudad:'La Paz',dirección:'Bella Vista'}]}
];
// Crea una función para añadir un nuevo contacto a una lista
const pushListContact=(nombre,apellido,telefono,ciudad,dirección)=>{
    const newListContact = listContact;
    newListContact.push({id:telefono,nombre:nombre,apellido:apellido,telefono:telefono,ubicación:[{ciudad:ciudad,dirección:dirección}]})
    return newListContact
}
// Crea una función para borrar un contacto existente de la lista
const deleteListContact=(contacto)=>{
    const newListContact = listContact;
    const indexListContact=newListContact.findIndex(list=>(list.nombre===contacto || list.apellido===contacto));
    newListContact.splice(indexListContact,1)
    console.log('newListContact ',newListContact)
    return newListContact
} 
// Crea una función para imprimir en consola los contactos presentes en la lista
const getList=(lista)=>{
     return lista
}   
// -----------RESULTADOS----------------------------------
 const deleted=deleteListContact('Maria')
console.log('Eliminar un contacto ',deleted)
const pushed=pushListContact('Cristopher','arce',333333,'La Paz','Aranjuez');
console.log('Crear un contacto', pushed);
const get=getList(pushed)
console.log('Lista actualizada 👌',get)