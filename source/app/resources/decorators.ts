export function Zoned ({ constructor }: any, propertyKey: string | symbol, { value }: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      if (!this.ngZone) {
        throw new Error(`@Zoned methods can only be on classes with an 'ngZone' field!' [ Class: '${constructor.name}' method: '${propertyKey}' ]`);
      }

      return this.ngZone.run(() => value.apply(this, args));
    }
  };
}
