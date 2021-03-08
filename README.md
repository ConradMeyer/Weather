# Asincronía para todos

## El problema

La asincronía es uno de las grandes complejidades de JavaScript, nos acabamos encontrando con varios procesos (funciones) que están descritos en un orden pero se ejecutan (se resuelven) en otro orden.

En Javascript la asincronía se puede dar de dos formas:

1) Funciones de callback
2) Promesas

Para que te acostumbres a ambas soluciones a continuación tienes dos ejercicios.

## Funciones provistas

dispones de dos funciones:

* La primera función resuelve la asincronía a través de una función de callback: una función que será ejecutada una vez se ha resuelto la asincronía.

    <ins>**Parámetros:**</ins>
  * **Latitud**: la latitud de la cual queremos obtener datos
  * **Longitud**: La longitud de la cual queremos obtener datos
  * **función de callback**: La función que se va a ejecutar una vez haya datos o un error. Recibe 2 parámetros:
    * **error**: instancia del objeto Error si hay error y null si no lo hay
    * **weatherData**: JSON con los datos recibidos de la api `Open Weather Map`, definidos en su [documentación](https://openweathermap.org/api/one-call-api)

  ```typescript
  // Función en /JS/callback.js
  function getWeather(lat: number, lon: number, callback: (error: Error | null, weatherData: Object | null) => any) {
    /* Lógica de la función */
  }
  ```

  <p style="background-color: #FFFF00; color: black; padding: 10px">:bulb: Para poder usar esta función, debes declarar un <span style="color: red">api_key</span> en <span style="color: red">/JS/callback.js</span>, para obtenerlo visita: <a href="https://home.openweathermap.org/api_keys">Obtén un api key</a></p>

* La segunda función resuelve la asincronía a través de una promesa: un objeto que provee de los métodos `.then` y `.catch`

    <ins>**Parámetro:**</ins>
  * **maxNumberQuestions**: El número de preguntas que quieres obtener de la api

  ```typescript
  // Función en /JS/promise.js
  function getQuestions(maxNumberQuestions: number = 5) {
    /* Lógica de la función */
  }
  ```

  <p style="background-color: #FFFF00; color: black; padding: 10px">:bulb: Para poder usar esta función, debes declarar un <span style="color: red">api_key</span> en <span style="color: red">/JS/promise.js</span>, para obtenerlo visita: <a href="https://quizapi.io/clientarea/settings/token">Obtén un api key</a></p>

## Ejercicios

1. Consigue obtener datos del tiempo en una ciudad.
2. Crea una función que acepte como parámetros una `latitud` y una `longitud` y `devuelve una promesa` que resuelva con los datos de `getWeather` y rechace con el error de `getWeather`.

3. Consigue obtener preguntas de quiz con `getQuestions`.
4. Crea una función que acepte como parámetros `el número de preguntas deseado` y una función la cual se llame una vez se obtengan las preguntas o un error, pasando `el error como primer parámetro` y `las preguntas como segundo parámetros` (callback).

5. Crea una función que pinte en pantalla la información del tiempo de la próxima semana, para ello, usa la función provista o la que te hayas creado.

6. Crea una función que pinte en pantalla las preguntas (con sus respuestas) que lleguen de la api, para ello, usa la función provista o la que te hayas creado.
