<template>
  <div class="step">
    <div class="exercise">
      <h1>Task 4 - A new feature 🎉</h1>
      <p>Tenemos que elaborar dos nuevas vistas para los usuarios: un listado de todos
        sus pedidos realizados, y el detalle de cada uno de esos pedidos.
        El equipo de producto nos ha pasado los siguientes diseños:
      </p>
      <ul>
        <li><a href="https://marvelapp.com/5668dj6/screen/59706050">Listado</a></li>
        <li><a href="https://marvelapp.com/5668dj6/screen/59706049">Detalle</a></li>
      </ul>
      <br>
      <p><strong>Requisitos:</strong></p>
      <ol>
        <li>Utiliza los datos del endpoint creado en el paso anterior</li>
        <li>Añade al router dos nuevas rutas para mostrar las dos vistas
          nuevas (p.ej: /orders y /orders/:orderId)</li>
        <li>Crea los componentes necesarios para generar las vistas</li>
        <li>Añade los estilos necesarios</li>
        <li>Puedes ignorar que las tarjetas son desplegables, no necesitamos esa
          información extra.
        </li>
      </ol>
      <p><strong>Comentarios:</strong></p>
      <ul>
        <li>La lista de pedidos está en el objeto <code>orders</code> de la respuesta</li>
        <li>La lista de productos de cada pedido está en <code>productsOrder</code>. Estos 
          sólo contienen los ID de los productos. Si necesitas más información sobre cada
          producto, está en el objeto <code>products</code>, a primer nivel en la respuesta
          del endpoint.</li>
        <li>Los horarios de recogida y entrega de cada producto están en la propiedad <code>visits</code></li>
        <li>Si el código de logística es 'PICKUP-DELIVERY', hay que mostrar el icono del camión.
          En cualquier otro caso, hay que mostrar el otro icono (marcador).
        </li>
      </ul>
    </div>
    <div class="info">Avanza al siguiente paso para continuar con la prueba!</div>
  </div>
</template>

<script>
export default {
  name: 'step-four'
}
</script>
