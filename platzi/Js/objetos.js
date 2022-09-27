
function empleado(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

emp1 = new empleado("Juan", "Roa", 23)
emp2 = new empleado("Mario", "Salazar", 28)
emp3 = new empleado("Maria", "Bastidas", 25)
emp4 = new empleado("Eriberto", "Rosales", 40)
emp5 = new empleado("Adriana", "Micky", 45)

console.log(emp1, emp2, emp3, emp4, emp5)