import { componentLoader } from '../utils/loaderHelper'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $componentLoader: typeof componentLoader
  }
}
