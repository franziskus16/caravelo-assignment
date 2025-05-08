# Caravelo Front-end Assignment

Este repositorio contiene la implementación del assignment técnico proporcionado por Caravelo para una aplicación multi-tenant basada en Vue 3 + Vite.

## 🧠 Descripción general

Se ha implementado la arquitectura requerida para soportar múltiples tenants con distintos niveles de personalización, siguiendo las instrucciones del README original proporcionado.

Este proyecto contiene la personalización para el tenant **Jetsmart (ja)**, con cambios visuales y estructurales en la vista de suscripciones.

---

## 🚀 Cómo ejecutar el proyecto

### 🔧 Requisitos

- Node.js 18+
- npm

### 💻 Ejecutar en modo desarrollo:

```bash
# Instalar dependencias
npm install

# Ejecutar la versión base
npm run dev

# Ejecutar la versión Jetsmart (tenant 'ja')
npm run dev:ja
```

---

## 🏗️ Estructura del proyecto

```plaintext
vue-app/
├── src/
│   ├── core/
│   │   ├── components/
│   │   ├── modules/
│   │   └── styles/
│   ├── tenants/
│   │   └── ja/
│   │       ├── components/
│   │       │   ├── Hero.vue
│   │       │   └── UserCard.vue
│   │       └── views/
│   │           └── Subscription.view.vue
├── test/
│   └── UserCard.test.ts
├── vite.config.ts
└── ...
```

---

## 🧪 Testing

Se ha añadido configuración para test unitarios con [Vitest](https://vitest.dev/).

### Ejecutar tests:

```bash
npm run test
```

Se ha implementado un test básico para el componente `UserCard`.

---

## 🎨 Personalizaciones del tenant Jetsmart (ja)

- ✅ Componente personalizado **Hero.vue**
- ✅ Vista `SubscriptionView.vue` personalizada para incluir el Hero y reordenar elementos
- ✅ Estilos custom para `UserCard` y `SubscriptionCard`
- ✅ Añadidos valores de **tema** específicos del tenant
- ✅ Loader dinámico con fallback al core funcionando correctamente
- ✅ Test unitario básico funcionando (`UserCard.test.ts`)

---

## 📋 Notas y consideraciones

- Se sigue la arquitectura del proyecto utilizando `loaderHelper.ts` para cargar dinámicamente vistas y componentes del tenant.
- Se intento hacer todo desde la misma `Subscription.view.vue` para mostrar el `Hero` pero luego se decidio cambiar la ubicación para su carga fuera solo a partir del tenant propio de JetSmart.
- El componente `Hero.vue` se renderiza solo para Jetsmart y se ubica sobre los componentes de tarjeta (`SubscriptionCard` y `UserCard`).
- Se ha aplicado `max-width` a los componentes de contenido para que el `Hero` ocupe ancho completo y el resto se centre.
- La funcionalidad de negocio no fue alterada; solo se han hecho personalizaciones visuales y de layout.
- Los valores del tema en el core se sobreescribieron desde la carpeta del tenant para mostrar solo el contenido especifico para JetSmart (ja).
- Se ha buscado detallar al maximo los estilos del tenant añadiendo variables nuevas al tenant siguiendo toda la información que nos mostraba el figma y apoyandome en el site de [JetSmartGo](https://go.jetsmart.com/en-us/ja/subscriptions). para algunos textos y estilos.
- Se ha testeado que muestre el cambio entre diferentes tenants, primero cargando con npm dev:va para visualizar los estilos propios de Veloair (va) y luego con el propio que he preparado de JetSmart (ja) para que mostrara el contenido nuevo solo para este tenant.
- La prueba se ha realizado en un total de entre 6 y 7 horas.

---

## 📤 Envío

El repositorio ha sido compartido con:

- `tech-assignment@caravelo.com`
- `jlv@caravelo.com`

---

## :bust_in_silhouette: Autor

- Francesc Gimenez Gil
