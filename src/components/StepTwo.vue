<template>
  <div class="step">
    <div class="exercise">
      <h1>Task 2a - Styles 🎨</h1>
      <p>El equipo de diseño ha pedido algunos cambios en el componente. 
        Quieren probar si los usuarios lo entienden mejor mostrando los nombres de los pasos 
        en la parte superior en vez de en la inferior.</p>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Modifica los estilos del componente para que el nombre de cada paso se muestre sobre él, en vez de debajo.
          El componente debe ser configurable para soportar ambas variantes, tanto la original como la nueva.</li>
      </ul>
    </div>
    <div class="exercise">
      <h1>Task 2b - Responsiveness 📱</h1>
      <p>El componente va a empezar a usarse en móviles (&lt;768px), donde presenta algunos problemas.</p>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Haz que en disposivos móviles sólo se muestre el nombre del paso activo.</li>
      </ul>
      <p><strong>Bonus:</strong></p>
      <ul>
        <li>En los anchos de pantalla más pequeños, o si los nombres de los pasos son un poco largos, surge otro problema de visualización. Propón alguna solución sencilla pero efectiva.</li>
        <li>Implementa las tareas con un enfoque mobile-first y elementos de accesibilidad.</li>
      </ul>
    </div>
    <div class="info">Avanza al siguiente paso para continuar con la prueba!</div>
  </div>
</template>

<script>
export default {
  name: 'step-two',

  props: {
    currentStep: {
      type: Number
    }
  }
}
</script>
