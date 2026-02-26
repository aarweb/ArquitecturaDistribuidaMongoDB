// Monitorizar replica set en tiempo real
function monitorRS() {
    while (true) {
        print("\n=== ESTADO DEL REPLICA SET ===");
        print("Timestamp: " + new Date().toISOString());

        rs.status().members.forEach(m => {
            let lag = m.optimeDate && m.state === 2
                ? Math.round((new Date() - m.optimeDate) / 1000)
                : 0;

            print(`${m.name.padEnd(20)} | ${m.stateStr.padEnd(12)} | Lag:${lag}s`);
        });

        sleep(5000); // Actualizar cada 5 segundos
    }
}

// Ejecutar monitorización
monitorRS();

// Ejecucion del script en contenedor
// docker exec -it mongo1 mongosh --file /dev/stdin < monitor.js
// Si da error de TTY
// docker exec mongo1 mongosh --quiet --file /dev/stdin < monitor.js

// Se usa /dev/stdin ya que se usa para leer el script desde la consola y no desde un archivo de contenedor
// /dev/stdin es un archivo especial que representa la entrada estándar. 