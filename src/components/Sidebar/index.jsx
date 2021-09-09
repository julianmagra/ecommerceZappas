import React from "react";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-filter-container">
        <span className="search-filter-name dd tag">
          aca! <span>x</span>
        </span>
        <span className="search-filter-name dd tag">
          aca! <span>x</span>
        </span>
        <span className="search-filter-name dd tag">
          aca! <span>x</span>
        </span>
        <span className="search-filter-name dd tag">
          aca! <span>x</span>
        </span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Genero</h4>
        </span>
        {/* debeeria ser linkeado a traves de css */}
        <span className="search-filter-name dd">Hombre</span>
        <span className="search-filter-name dd">Mujer</span>
        <span className="search-filter-name dd">Ninos</span>
        <span className="search-filter-name dd">Ninas</span>
        <span className="search-filter-name dd">Bebes</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Marca</h4>
        </span>
        <span className="search-filter-name dd">Adidas</span>
        <span className="search-filter-name dd">Nike</span>
        <span className="search-filter-name dd">Asics</span>
        <span className="search-filter-name dd">Lacoste</span>
        <span className="search-filter-name dd">Jordan</span>
        <span className="search-filter-name dd">Converse</span>
        <span className="search-filter-name dd">Puma</span>
        <span className="search-filter-name dd">Polo</span>
        <span className="search-filter-name dd">Mistral</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Deporte</h4>
        </span>
        <span className="search-filter-name dd">Running</span>
        <span className="search-filter-name dd">Futbol</span>
        <span className="search-filter-name dd">Basquet</span>
        <span className="search-filter-name dd">Training</span>
        <span className="search-filter-name dd">Tenis</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Material</h4>
        </span>
        <span className="search-filter-name dd">Tela</span>
        <span className="search-filter-name dd">Gamuza</span>
        <span className="search-filter-name dd">Cuero</span>
        <span className="search-filter-name dd">Cuero Sintentico</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Talle</h4>
        </span>

        <span className="search-filter-name dd">35</span>
        <span className="search-filter-name dd">36.5</span>
        <span className="search-filter-name dd">38</span>
        <span className="search-filter-name dd">40</span>
        <span className="search-filter-name dd">41.5</span>
        <span className="search-filter-name dd">43</span>
        <span className="search-filter-name dd">45</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Color</h4>
        </span>

        <span className="search-filter-name dd">Blanco</span>
        <span className="search-filter-name dd">Negro</span>
        <span className="search-filter-name dd">Rojo</span>
        <span className="search-filter-name dd">Gris</span>
        <span className="search-filter-name dd">Gris oscuro</span>
        <span className="search-filter-name dd">Azul oscuro</span>
      </div>
      <div className="search-filter-container">
        <span className="search-filter-title">
          <h4>Precio</h4>
        </span>

        <span className="search-filter-name dd">Hasta $7.000</span>
        <span className="search-filter-name dd">De $7.000 a $10.000</span>
        <span className="search-filter-name dd">Mas de $10.000</span>
        <span>
          <input type="number" name="minimum" placeholder="Minimo" />
          --
          <input type="number" name="maximum" placeholder="Maximo" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
