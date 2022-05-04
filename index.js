// Crea una lista de contactos con datos predefinidos, cada contacto debe contener
// el nombre y apellido como una sola cadena de caracteres
const listContact = [
    {nombre:'Maria',apellido:'Ramos',telefono:78915400},
    {nombre:'Sara',apellido:'Gallardo',telefono:78915401},
    {nombre:'Edson',apellido:'Sosa',telefono:78915402},
    {nombre:'Daniel',apellido:'Ticona',telefono:78915403}
];
// Crea una función para añadir un nuevo contacto a una lista
const pushListContact=(nombre,apellido,telefono)=>{
    const newListContact = listContact;
    newListContact.push({nombre:nombre,apellido:apellido, telefono:telefono})
    return newListContact
}
// Crea una función para borrar un contacto existente de la lista
const deleteListContact=(contacto)=>{
    const newListContact = listContact;
    const indexListContact=newListContact.findIndex(list=>(list.nombre===contacto));
    newListContact.splice(indexListContact,1)
    console.log('newListContact ',newListContact)
    return newListContact
} 
// Crea una función para imprimir en consola los contactos presentes en la lista
const getList=(lista)=>{
     return lista
}   
// Filtrar los nombres de los contactos por orden ascendente
const getSortAscendingbyName=(listaContact)=>{
    const sortAscendingbyName = listContact.sort((a,b)=>{
        if(a.nombre>b.nombre){
            return 1;
        }
        if(a.nombre<b.nombre){
            return -1
        }
        return 0
    })  
    return sortAscendingbyName
}
// -----------RESULTADOS----------------------------------
const deleted=deleteListContact('Maria')
console.log('Eliminar un contacto ',deleted)
const pushed=pushListContact('Cristopher','arce', 78914444);
console.log('Adicionar un contacto', pushed);
let get=getList(pushed)
console.log('Lista actualizada 👌',get)
console.log('getSortAscendingbyName', getSortAscendingbyName(listContact))
