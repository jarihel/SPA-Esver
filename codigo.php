<?php
//captura de variables
$nombre=$_POST['nombre']; 
$telefono=$_POST['telefono'];
$email=$_POST['email'];
$consulta=$_POST['mensaje'];

//cuerpo del email
$mensaje="
<strong>Nombre:</strong>$nombre<br/><br/>
<strong>Telefono:</strong>$telefono<br/><br/>
<strong>Email:</strong>$email<br/><br/>
<strong>Consulta:</strong>$consulta<br/><br/>
";

//envío del email
mail("javier_9333@hotmail.com", "Consulta Esver", $mensaje, "From: $nombre <$email>\nReply-to:$email\nContent-type: text/html; charset=iso-8859-1\n");

?> 