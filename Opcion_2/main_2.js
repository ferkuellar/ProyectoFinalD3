// Declaración de Constantes Globales
const diCaprioBirthYear = 1974;  // Año de nacimiento de Leonardo DiCaprio
const today = new Date().getFullYear();  // Año actual
const AGE_THRESHOLD = 25;  // Umbral de edad para referencia

// Función para Calcular Edad
const calculateAge = year => year - diCaprioBirthYear;

// Dimensiones y Márgenes del Gráfico SVG
const width = 800;  // Ancho del área de representación
const height = 600; // Altura del área de representación
const margin = { 
    top: 40,        // Margen superior
    right: 40,      // Margen derecho
    bottom: 40,     // Margen inferior
    left: 40        // Margen izquierdo
};

// Selección y Creación de Elementos SVG y Grupos
const svg = d3
    .select('#chart')  // Seleccionar el elemento con ID 'chart'
    .append('svg')     // Agregar un elemento SVG
    .attr('width', width)  // Establecer ancho del SVG
    .attr('height', height); // Establecer altura del SVG

const elementGroup = svg
    .append('g')  // Agregar grupo para elementos
    .attr('class', 'elementGroup')  // Asignar clase CSS
    .attr("transform", `translate(${margin.left}, ${margin.top})`);  // Alinear grupo con márgenes

const axisGroup = svg
    .append('g')  // Agregar grupo para ejes
    .attr('class', 'axisGroup');  // Asignar clase CSS

const xAxisGroup = axisGroup
    .append("g")  // Agregar grupo para eje X
    .attr("class", "xAxisGroup")  // Asignar clase CSS
    .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`);  // Alinear grupo en margen inferior

const yAxisGroup = axisGroup
    .append("g")  // Agregar grupo para eje Y
    .attr("class", "yAxisGroup")  // Asignar clase CSS
    .attr("transform", `translate(${margin.left}, ${margin.top})`);  // Alinear grupo en margen superior

// Escalas y Ejes
const x = d3
    .scaleBand()  // Escala de banda para ejes categóricos
    .range([0, width - margin.left - margin.right])  // Rango del eje X
    .padding(0.1);  // Espaciado entre las bandas

const y0 = d3
    .scaleLinear()  // Escala lineal para ejes numéricos
    .range([height - margin.top - margin.bottom, 0])  // Rango del eje Y
    .domain([15, 45]);  // Rango de valores del eje Y

const y1 = d3
    .scaleLinear()  // Otra escala lineal para el segundo eje Y
    .range([height - margin.top - margin.bottom, 0])  // Rango del segundo eje Y
    .domain([15, 45]);  // Rango de valores del segundo eje Y

const xAxis = d3
    .axisBottom()  // Eje inferior (X)
    .scale(x);  // Escala utilizada para el eje X

const yAxis = d3
    .axisLeft()  // Eje izquierdo (Y)
    .scale(y0);  // Escala utilizada para el primer eje Y

const y1Axis = d3
    .axisLeft()  // Otro eje izquierdo (Y) para el segundo eje Y
    .scale(y1);  // Escala utilizada para el segundo eje Y

// Cargar Datos y Crear Visualización
d3.csv('data(2).csv').then(data => {  // Cargar datos desde un archivo CSV
    data.forEach(d => {
        d.name = d.name.replace(' ', '-');  // Reemplazar espacios en nombres
        d.year = +d.year;  // Convertir año a número
        d.age = +d.age;  // Convertir edad a número
    });

    x.domain(data.map(d => d.year));  // Establecer dominio del eje X

    xAxisGroup
        .call(xAxis);  // Agregar eje X al grupo
    yAxisGroup
        .call(yAxis);  // Agregar primer eje Y al grupo
    yAxisGroup
        .call(y1Axis);  // Agregar segundo eje Y al grupo

    const elements = elementGroup
        .selectAll('rect')
        .data(data);  // Seleccionar elementos rect y enlazar datos

    elements.enter()
        .append('rect')  // Agregar rectángulos
        .attr('class', d => `${d.name} bar`)  // Asignar clase CSS dinámica
        .attr('x', d => x(d.year))  // Posición en eje X
        .attr('y', d => y0(d.age))  // Posición en primer eje Y
        .attr('height', d => height - margin.top - margin.bottom - y0(d.age))  // Altura basada en la edad
        .attr('width', x.bandwidth())  // Ancho de rectángulos
        .on('mouseover', d => {  // Evento de mouseover
            const remainingYears = AGE_THRESHOLD - d.age;  // Calcular años restantes
            const message = remainingYears === 0
                ? `Seleccionaste a ${d.name} con ${d.age} años.`
                : `Seleccionaste a ${d.name} con ${d.age} años. Quedan ${remainingYears} años de relación.`;
            d3
                .select('#name')
                .text(message);  // Actualizar contenido en elemento con ID 'name'
        });

    const line = d3
        .line()  // Crear una línea
        .x(d => x(d.year))  // Coordenada X de la línea
        .y(d => y1(calculateAge(d.year)));  // Coordenada Y de la línea

    elementGroup
        .datum(data)  // Asignar datos al grupo de elementos
        .append("path")  // Agregar elemento de tipo 'path' (ruta)
        .attr("id", "linea")  // Asignar ID
        .attr("d", line);  // Asignar atributo 'd' para definir la forma de la línea

    elementGroup
        .append("line")  // Agregar línea
        .attr("x1", 0)  // Coordenada X inicial
        .attr("x2", width - margin.left - margin.right)  // Coordenada X final
        .attr("y1", y1(AGE_THRESHOLD))  // Coordenada Y inicial
        .attr("y2", y1(AGE_THRESHOLD))  // Coordenada Y final
        .attr('stroke', 'red')  // Color de trazo
        .attr('stroke-width', 2);  // Ancho de trazo
});
