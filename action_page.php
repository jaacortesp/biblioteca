<?php
    $servername = "localhost";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $database = "tu_base_de_datos";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("La conexión ha fallado: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        $nombreCompleto = $_POST['nombre-completo'];
        $usuario = $_POST['usuario'];
        $correo = $_POST['correo'];
        $contrasena = $_POST['contrasena'];
        $fechaNacimiento = $_POST['fecha-nacimiento'];
        $direccion = $_POST['direccion'];

        $sql = "INSERT INTO usuarios (nombre_completo, usuario, correo, contrasena, fecha_nacimiento, direccion) 
                VALUES ('$nombreCompleto', '$usuario', '$correo', '$contrasena', '$fechaNacimiento', '$direccion')";

        if ($conn->query($sql) === TRUE) {
            echo "<p>Datos almacenados correctamente</p>";

            $last_id = $conn->insert_id;
            $sql_select = "SELECT * FROM usuarios WHERE id = $last_id";
            $result = $conn->query($sql_select);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo "<h2>Datos Ingresados:</h2>";
                echo "<p>Nombre Completo: " . $row['nombre_completo'] . "</p>";
                echo "<p>Usuario: " . $row['usuario'] . "</p>";
                echo "<p>Correo Electrónico: " . $row['correo'] . "</p>";
                echo "<p>Fecha de Nacimiento: " . $row['fecha_nacimiento'] . "</p>";
                echo "<p>Dirección: " . $row['direccion'] . "</p>";
            } else {
                echo "No se encontraron datos.";
            }
        } else {
            echo "Error al almacenar los datos: " . $conn->error;
        }
    }
    
    $conn->close();
    ?>

