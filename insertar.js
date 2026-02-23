use laboratorio;

for (let i = 0; i < 10000; i++) {
    db.experimentos.insertOne({
        experimento_id: i,
        tipo: ['temperatura', 'presion', 'humedad'][i % 3],
        valor: Math.random() * 100,
        timestamp: new Date(),
        ubicacion: ['Madrid', 'Barcelona', 'Valencia'][i % 3]
    });
    if (i % 1000 === 0) {
        print('Insertados: ' + i);
    }
}
print('¡Hecho! Documentos totales: ' + db.experimentos.countDocuments());
