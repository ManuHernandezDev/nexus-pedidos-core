package com.restaurante.backend;

import java.util.ArrayList;
import java.util.List;

public class MenuController {

    // Método para obtener la lista de platillos del menú
    public List<String> getMenu() {
        List<String> menu = new ArrayList<>();
        menu.add("Tlayuda Especial - $150.00");
        menu.add("Mole Negro - $120.00");
        menu.add("Enchiladas de Coloradito - $95.00");
        menu.add("Agua de Horchata con Tuna - $35.00");
        
        System.out.println("Cargando menú del restaurante...");
        return menu;
    }

    public void agregarPlatillo(String platillo) {
        System.out.println("Nuevo platillo añadido: " + platillo);
    }
}