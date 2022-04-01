// Crea una lista de contactos con datos predefinidos, cada contacto debe contener
// el nombre y apellido como una sola cadena de caracteres
const listContact = [
    {nombre:'Maria',apellido:'Ramos'},
    {nombre:'Sara',apellido:'Gallardo'},
    {nombre:'Edson',apellido:'Sosa'},
    {nombre:'Daniel',apellido:'Ticona'}
];
// Crea una función para añadir un nuevo contacto a una lista
const pushListContact=(nombre,apellido)=>{
    const newListContact = listContact;
    newListContact.push({nombre:nombre,apellido:apellido})
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
// -----------RESULTADOS----------------------------------
 const deleted=deleteListContact('Maria')
console.log('Eliminar un contacto ',deleted)
const pushed=pushListContact('Cristopher','arce');
console.log('Adicionar un contacto', pushed);
const get=getList(pushed)
console.log('Lista actualizada 👌',get)