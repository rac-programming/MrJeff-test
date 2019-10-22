<template>
  <div class="step">
    <div class="exercise">
      <h1>Task 3a - API Request 📡</h1>
      <p>Implementa una llamada HTTP al siguiente servicio de la API de MrJeff.</p>
      <div class="doc-box">
        <p>
          <strong>HOST: </strong>
          <code>https://ecommerce.v1.backend.pre.mrjeffapp.net</code>
        </p>
        <p>
          <strong>PATH: </strong>
          <code>/apps/orders/search/findByCustomerId</code>
        </p>
        <p>
          <strong>HEADERS: </strong>
          <br>
          <code>Token: (Te lo enviaremos por email)
          </code>
        </p>
      </div>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Implementa la petición al backend usando los datos proporcionados</li>
      </ul>
      <p><strong>Bonus:</strong></p>
      <ul>
        <li>Modifica la arquitectura del proyecto para que las llamadas al backend
          estén más organizadas (p.ej: servicios, constantes, etc.)
        </li>
      </ul>
    </div>

    <div class="info">Avanza al siguiente paso para continuar con la prueba!</div>
  </div>
</template>

<script>
export default {
  name: 'step-three'
}
</script>
