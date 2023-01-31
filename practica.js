// Miau Usuario

alert("bienvenido a Miau Skin");
alert("A continuacion, crea tu propio usuario");

let usuario1 = prompt("Ingrese su nuevo nombre de usuario");

alert("Bienvenido, " + usuario1);

alert("Ahora vamos a asignarte una contraseña temporal: 12345");

const contraseña = 12345;

alert("ahora, iniciá sesion, " + usuario1);

usuario = prompt("Usuario:");
contraseña1 = prompt("Contraseña temporal:");

for (let i = 0; i < 3; i++) {
  if (usuario1 == usuario && contraseña == contraseña1) {
    alert("Creaste tu usuario!");
    break;
  } else {
    alert ("Ingresaste mal algun dato, intenta nuevamente")
    usuario = prompt("Usuario:");
    contraseña1 = prompt("Contraseña temporal:");

  }
}

