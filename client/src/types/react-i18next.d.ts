declare module 'react-i18n' {
  type WrappedCompType = <P>(
    comp: React.ComponentType<P>
  ) => React.ComponentType<P>
  export function translate(namespace?: string[]): WrappedCompType
}
