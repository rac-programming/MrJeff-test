<template>
  <div class="step">
    <div class="exercise">
      <h1>Task 1a - Bug 🐛</h1>
      <p>Tenemos el componente <code>&lt;Stepper&gt;</code> insertado en nuestra aplicación. Este componente nos permite visualizar cuántos pasos hay y en cuál estamos.</p>
      <p>El componente está insertado en el archivo <code>App.vue</code>, pero no funciona.</p>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Detecta y corrige los errores. Cuando esté arreglado, el componente debería aparecer en el recuadro más arriba.</li>
      </ul>
    </div>
    <div class="exercise">
      <h1>Task 1b - New features 🔧</h1>
      <p>Modifica el componente Stepper.</p>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Crea dos botones que te permitan avanzar y retroceder por los pasos.</li>
      </ul>
      <p><strong>Bonus:</strong></p>
      <ul>
        <li>Añade la posibilidad de poder pulsar sobre los pasos que ya has visitado, haciendo que se marque como activo dicho paso.</li>
        <li>Añade soporte para teclado (flechas adelante/atrás, números para ir al paso X)</li>
      </ul>
    </div>
    <div class="exercise">
      <h1>Task 1c - Make it work! 🏗</h1>
      <p>En la carpeta <code>/components/steps</code> están los componentes con el contenido de todos los pasos por los que tiene pasar el stepper.</p>
      <p><strong>Requisitos:</strong></p>
      <ul>
        <li>Configura la aplicación para que muestre el componente correspondiente a cada paso.</li>
      </ul>
    </div>
    <div class="info">Avanza al siguiente paso para continuar con la prueba!</div>
  </div>
</template>

<script>
export default {
  name: 'step-one',

  props: {
    currentStep: {
      type: Number
    }
  }
}
</script>
