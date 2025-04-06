<template>
  <div class="q-pa-md q-gutter-md">

    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">1. Q-Form </h2>
        <p>
          Componente de Quasar para crear formularios. Permite la validación de los campos y la gestión de eventos.
        </p>
        <p>
          He utilizado este componente para crear el formulario de contacto en FormPage.vue. En este formulario, he utilizado la directiva Q-Input para crear los inputs para los datos y Q-Btn para "enviar" el formulario.
        </p>
        <h6> Q-Input </h6>
        <p>
          Q-Input es la directiva de Quasar para crear inputs. Puedes usarla para crear inputs de diferentes tipos. En mi caso, he uitilzado el tipo email, textarea y el normal.
        </p>
        <p>
          Para la pagina ShopPage.vue ha sido utilizado como buscador, filtrando los productos por si contienen lo que has escrito.
        </p>
        <p>Para FormPage.vue he utilizado el tipo "textaria" para el campo de mensaje a enviar, el tipo "email" para el apartado de correo, he utilizado las directivas de Quasar para crear un tipo "Select". Para esto, le he pasado los props de "options" para darle las opciones que he introducido para escoger y "rules" para que, si no escoges nadam, te salte un error. </p>

        <h6> Q-Btn </h6>
        <p>
          Componente de Quasar para crear botones. Permite la personalización de estilos y eventos.
        </p>
        <p>Lo he utilizado en FormPage.vue para "enviar" el form. El form como tal no se envía a ningún sitio, pero al pulsar el botón se reinician los campos y te sale una notificación como aviso de que se ha enviado. </p>
        <p>También lo he utilizado para la pagina ShopPage.vue, donde cada Card tiene un botón "Add to cart" el cual simplemente hace que te salte una notificación y se añada a un carrito de la compra que se guarda en el Local Storage.</p>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">2. Q-Page</h2>
        <p>
          Contenedor que representa una página en una aplicacion de Quasar.
        </p>
        <p>Ha sido utilizado en App.vue y ShopPage.vue. Se utiliza como contenedor del componente de vista de pagina ShopPage.vue.</p>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">3. Q-Card</h2>
        <p>
          Bloque de contenido que representa una tarjeta. Lo he utilizado para mostrar información contenida (en vez de utilizar div, por ejemplo).
        </p>
        <p>Lo utilizo en IndexPage.vue para cada componente de Quasar, en ProductPage.vue para el producto en sí y en ShopPage.vue hago un v-for sobre una q-card para que cada producto se muestre igual.</p>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">4. Q-Img</h2>
        <p>
          Componente de quasar para mostrar imágenes.
        </p>
        <p>
          Ha sido utilizado en ShopPage.vue, utilizando la src que me devolvia la API para las imagenes de los productos, y en ProductPage.vue para mostrar el item que se escoja para ver.
        </p>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">5. Q-Rating</h2>
        <p>
          Componente de quasar para mostrar una puntuación.
        </p>
        <p>
          Ha sido utilizado en ShopPage.vue y en ProductPage.vue para lo mismo. Mostrar el rating de cada producto.
        </p>
        <p>El componente q-rating requiere como mínimo de un v-model o un model-value donde tu le pases un numero para la cantidad de estrellas que tiene el objeto. Solo puede mostrar valores sin decimales, por lo que he tenido que redondear hacia abajo.</p>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="bg-grey-2 text-black">
      <q-card-section>
        <h2 class="text-primary">6. Q-header / Q-toolbar-title / Q-tabs / q-route-tab </h2>
        <h6>Q-Header</h6>
        <p>Componente de cabecera fija en la parte superior de la pagina.</p>
        <p>Hecha para encapsular el contenido de componente NavBar.vue</p>
        <h6>Q-Tabs</h6>
        <p>Contenedor de pestañas. Con esto he organizado el NavBar.vue.</p>
        <h6>Q-Toolbar-Title</h6>
        <p>Componente de Quasar que he utilizado para escribir el titulo de la pagina web en el NavBar.vue</p>
        <h6>Q-Route-Tabs</h6>
        <p>Componente de Quasar para las pestañas. Sustituye al anchor de HTML y RouterLink de Vue.</p>
      </q-card-section>
    </q-card>

  </div>
</template>
