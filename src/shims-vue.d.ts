/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Add CSS module declarations
declare module '*.css' {
  const content: string
  export default content
}

declare module 'vuetify/styles' {
  const styles: any
  export default styles
}
