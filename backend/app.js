const express = require('express');
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Memoria temporal para almacenar pedidos
let pedidos = [];

// Endpoint 1 - Obtener productos
app.get('/productos', (req, res) => {
    res.json([
        { id: 1, nombre: "Tlayuda Tradicional", precio: 120 },
        { id: 2, nombre: "Orden de Memelas", precio: 60},
        { id: 3, nombre: "Enchiladas de Coloradito", precio: 100 }
    ]);
});

// Endpoint 2 - Crear pedido original
app.post('/pedido', (req, res) => {
    const nuevoPedido = req.body;
    nuevoPedido.id = pedidos.length + 1; // Asignar un ID simple
    nuevoPedido.estado = "Pendiente";
    pedidos.push(nuevoPedido);
    res.status(201).json({
        mensaje: "Pedido recibido y guardado con éxito",
        pedido: nuevoPedido
    });
});

// Aportación: Endpoint para actualizar el estado del pedido a "Completado"
app.put('/pedido/:id', (req, res) => {
    const idPedido = parseInt(req.params.id);
    const pedido = pedidos.find(p => p.id === idPedido);

    if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
    }

    pedido.estado = "Completado"; // Actualizamos el estado
    res.json({
        mensaje: "Estado del pedido actualizado exitosamente",
        pedido: pedido
    });
});

// Endpoint 3 - Obtener todos los pedidos
app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log("Servidor REST corriendo en el puerto 3000");
});