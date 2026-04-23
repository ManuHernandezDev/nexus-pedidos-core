package com.restaurante.backend;

public class PedidoService {

    public void procesarPedido(int idPedido, String cliente) {
        // Simulación de lógica de negocio para pedidos
        System.out.println("Procesando pedido #" + idPedido + " para el cliente: " + cliente);
        validarInventario();
        System.out.println("Pedido enviado a cocina.");
    }

    private void validarInventario() {
        System.out.println("Verificando ingredientes en stock...");
    }

    public String consultarEstado(int idPedido) {
        return "El pedido #" + idPedido + " se encuentra en preparación.";
    }
}