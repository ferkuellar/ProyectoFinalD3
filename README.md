# ProyectoFinalD3

# Ejercicio 01 
## Slider para Visualizar Ganadores de la Copa Mundial

Este ejercicio consiste en una aplicación web que muestra un gráfico de barras que representa los ganadores de la Copa Mundial de Fútbol a lo largo de los años. Además, se utiliza un slider interactivo para cambiar el año y actualizar las barras del gráfico de acuerdo a los equipos ganadores en ese año.

## Requisitos

Para visualizar la aplicación, asegúrate de tener instalado un navegador web y una conexión a Internet, ya que se cargarán algunas librerías desde la web.

## Instrucciones

1. Descarga los archivos `index.html`, `style.css`, `main.js` y el archivo de datos `WorldCup.csv`.
2. Abre el archivo `index.html` en tu navegador web.

## Contenido de Archivos

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='https://d3js.org/d3.v7.min.js'></script>
    <script src='https://unpkg.com/d3-simple-slider'></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div id="chart"></div>
    <div id="slider-time"></div>
    <p id="value-time"></p>
    <script src="main.js"></script>
</body>
</html>
```

### style.css

```css
/* Aquí puedes personalizar el estilo del gráfico si lo deseas */
```

### main.js

```javascript
// El código JavaScript modificado se encuentra aquí.
// Asegúrate de reemplazar el contenido del archivo original con el código proporcionado.
```

### WorldCup.csv

```csv
Year,Winner
1930,Uruguay
1934,Italy
1938,Italy
1950,Uruguay
1954,Germany
1958,Brazil
1962,Brazil
1966,England
1970,Brazil
1974,Germany
1978,Argentina
1982,Italy
1986,Argentina
1990,Germany
1994,Brazil
1998,France
2002,Brazil
2006,Italy
2010,Spain
2014,Germany
2018,France
2022,Argentina
```

## Funcionamiento

La aplicación cargará el gráfico de barras inicialmente mostrando los equipos ganadores de la Copa Mundial en el año más reciente disponible en los datos.

- Utiliza el slider para cambiar el año.
- El gráfico de barras se actualizará automáticamente para mostrar los equipos ganadores en el año seleccionado.
- La etiqueta debajo del slider mostrará el año seleccionado actualmente.

Este ejercicio utiliza las siguientes librerías:

- [D3.js](https://d3js.org/): Biblioteca de JavaScript para manipular documentos basados en datos.
- [d3-simple-slider](https://github.com/johnwalley/d3-simple-slider): Componente de slider interactivo basado en D3.js.

## Notas

Este ejercicio es solo una demostración y puede mejorarse y adaptarse para su uso en proyectos más complejos. Para obtener más información sobre las funcionalidades de D3.js y la manipulación de datos en gráficos, consulta la documentación oficial y otros recursos disponibles en línea.

--------

# Ejercicio 02: 
## Gráficas de Edades: Leonardo DiCaprio y sus Ex Parejas

Este es un ejercicio que muestra las edades de Leonardo DiCaprio en una gráfica de línea y las edades de sus ex parejas en una gráfica de barras, utilizando la misma escala para comparar ambas edades.

## Requisitos

- [D3.js](https://d3js.org/) (Versión 5 o superior)
- Archivo CSV con la información de las edades de las ex parejas de DiCaprio

## Cómo Funciona

1. Asegúrate de tener D3.js instalado y disponible para el archivo HTML.
2. Crea un archivo CSV llamado "data(2).csv" con la información de las edades de las ex parejas de Leonardo DiCaprio.
3. Copia y pega el código del archivo "main_2.js" en tu archivo JavaScript.
4. Asegúrate de que el archivo "style.css" tenga los estilos necesarios para mostrar correctamente las gráficas.
5. Abre el archivo "index.html" en tu navegador web.

--------
# Ejercicio 3
## Gráfica de Línea con D3.js

Este es un pequeño proyecto que muestra cómo crear una gráfica de línea utilizando D3.js para visualizar los datos de cierre del mercado del índice IBEX desde un archivo CSV.

## Requisitos

Para ejecutar esta gráfica, asegúrate de tener los siguientes archivos en el directorio:

- `index.html`: El archivo HTML que contiene la estructura básica de la página.
- `main.js`: El archivo JavaScript que carga los datos del archivo CSV y crea la gráfica de línea.
- `style.css`: El archivo CSS que agrega estilos a la gráfica.

## Datos

El archivo CSV (`ibex.csv`) debe contener los siguientes campos:

- `date`: La fecha en formato "YYYY-MM-DD".
- `close`: El valor de cierre del mercado para cada fecha.

Asegúrate de que los datos sean válidos y estén correctamente formateados en el archivo CSV.

## Cómo usar

1. Descarga los archivos (`index.html`, `main.js`, y `style.css`) en un directorio local.

2. Abre el archivo `index.html` en tu navegador web.

3. Deberías ver una gráfica de línea que muestra los datos de cierre del mercado del índice IBEX en función de la fecha.

## Dependencias

El proyecto utiliza la biblioteca D3.js para la manipulación y visualización de datos. La versión utilizada es D3.js v5 y se carga directamente desde el sitio web oficial.

```html
<script src="https://d3js.org/d3.v5.min.js"></script>
```

## Estructura del Código

```markdown
index.html        # Archivo HTML con la estructura básica de la página.
main.js           # Archivo JavaScript para cargar datos y crear la gráfica de línea.
style.css         # Archivo CSS para agregar estilos a la gráfica.
ibex.csv          # Archivo CSV que contiene los datos de cierre del mercado del índice IBEX.
```

## Créditos

Este proyecto fue creado como ejemplo de cómo utilizar D3.js para crear una gráfica de línea. El crédito de D3.js va a la comunidad y los desarrolladores que contribuyen a esta increíble biblioteca de visualización de datos.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Puedes utilizarlo, modificarlo y distribuirlo libremente. Lee el archivo `LICENSE` para obtener más información.
