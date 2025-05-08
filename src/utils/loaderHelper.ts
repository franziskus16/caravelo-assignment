import { defineAsyncComponent } from "vue";

const tenant = import.meta.env.VITE_TENANT;
console.log("loadhelper tenant: ", tenant);

// Registrar dinámicamente todos los componentes y vistas
const tenantComponents = import.meta.glob("/src/tenants/*/components/**/*.vue");
const defaultComponents = import.meta.glob("/src/core/components/**/*.vue");
const tenantViews = import.meta.glob("/src/tenants/*/views/**/*.vue");
const defaultViews = import.meta.glob("/src/core/views/**/*.vue");

/**
 * Crea un cargador dinámico para componentes o vistas.
 */
function createLoader(type: "components" | "views") {
  const tenantPaths = type === "components" ? tenantComponents : tenantViews;
  const defaultPaths = type === "components" ? defaultComponents : defaultViews;

  return (name: string) => {
    const tenantPath = `/src/tenants/${tenant}/${type}/${name}.vue`;
    const defaultPath = `/src/core/${type}/${name}.vue`;

    return defineAsyncComponent(() => {
      if (tenant && tenantPaths[tenantPath]) {
        return tenantPaths[tenantPath](); // Cargar componente específico del tenant
      }
      if (defaultPaths[defaultPath]) {
        return defaultPaths[defaultPath](); // Cargar el default si no hay tenant
      }

      return Promise.reject(
        new Error(`[${type}] No se encontró el componente/vista: ${name}`)
      );
    });
  };
}

/**
 * Exporta las funciones de carga para componentes y vistas.
 */
export const componentLoader = createLoader("components");
export const viewLoader = createLoader("views");

// // utils/loaderHelper.ts
// import { defineAsyncComponent } from 'vue'

// const tenant = import.meta.env.VITE_TENANT

// /**
//  * Creates a path resolver for dynamic imports
//  */
// function createPathResolver(type: 'components' | 'views') {
//   return {
//     getTenantPath: (name: string) => `/src/tenants/${tenant}/${type}/${name}.vue`,
//     getDefaultPath: (name: string) => `/src/${type}/${name}.vue`
//   }
// }

// /**
//  * Generic loader function for both components and views
//  */
// function createLoader(type: 'components' | 'views') {
//   const { getTenantPath, getDefaultPath } = createPathResolver(type)

//   return (name: string) => {
//     // If no tenant is specified, load default directly
//     if (!tenant) {
//       return defineAsyncComponent(() => {

//         return import(

//           /* @vite-split client-[request] */
//           getDefaultPath(name))
//       })
//     }

//     // Try tenant-specific first, fallback to default
//     return defineAsyncComponent(() => {
//       const tenantPath = getTenantPath(name)
//       console.log('Path: ', tenantPath)
//       console.log('Tenant: ', tenant)
//       console.log('Type: ', type)
//       console.log('Name: ', name)

//       return import(

//         /* @vite-split client-[request] */
//         tenantPath)
//         .catch((error) => {
//           console.error(`[${type}] Failed to load tenant-specific component:`, error)
//           console.log(`[${type}] No tenant-specific ${type.slice(0, -1)} found for ${name}, loading default`)

//           return import(

//             /* @vite-split client-[request] */
//             getDefaultPath(name))
//             .catch((defaultError) => {
//               console.error(`[${type}] Failed to load both tenant and default ${type.slice(0, -1)}:`, {
//                 tenantError: error,
//                 defaultError
//               })
//               throw defaultError
//             })
//         })
//     })
//   }
// }

// /**
//  * Loads a component, trying tenant-specific first then falling back to default
//  */
// export const componentLoader = createLoader('components')

// /**
//  * Loads a view, trying tenant-specific first then falling back to default
//  */
// export const viewLoader = createLoader('views')
