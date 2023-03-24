# Memoizer

## Motivo

Memoizer es un modulo simple de codigo para memoizar funciones. El motivo principal de este proyecto fue publicar un paquete en npm y setear una configuracion basica de github actions para simular un entorno de desarrollo agil y continuo

## Descripcion

Memoizer es un modulo que recibe un callback, del cual en base a sus argumentos memoizara el resultado para no ejecutar el callback una segunda vez. 

Por ende los callbacks que se pasen al Memoizer, deben ser funciones puras, sin side effects y que en base a una misma entrada proporcione una misma salida. 

Puedes memoizar valores primitivos de la siguiente forma:

```js
import { memoizer } from '@juancho-dev/memoizer'

const sum = (a, b) => a + b
const memoizedSUm = memoizer(sum)

// Executes callback
memoizedSum(5, 5)

// Returns value from cache - does not executes callback 
memoizedSum(5, 5)
```

Puedes memoizar un callback que recibe objetos como parametros de la siguiente forma:

```js
import { memoizer } from '@juancho-dev/memoizer'

const getNameAndAge = (person) => `${p.name} ${p.age}` 
const memoizedNameAndAge = memoizer(sum)

// Executes callback
memoizedNameAndAge({name: "John", age: 20})

// Returns value from cache - does not executes callback 
memoizedNameAndAge({name: "John", age: 20})
```

## Work in progress

### TODO

- [x] Crear memoizador
- [x] Crear tests
- [x] Agregar linter y prettier
- [x] Setear pipeline de github actions para publicar la libreria
- [ ] Setear una herramienta para commits semanticos y changelog
- [x] Separar ramas dev y master 
- [ ] Verificar con promesas como argumentos o como respuesta el resultado de haber memoizado el callback 