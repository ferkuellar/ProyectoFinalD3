// Paso 1: Cargar los datos desde el archivo CSV utilizando D3.js
d3.csv("ibex.csv")
    .then(function(data) {
    // Paso 2: Preparar los datos para la gráfica
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });

    // Paso 3: Crear la estructura básica de la gráfica
    const margin = { 
        top: 20, 
        right: 30, 
        bottom: 30, 
        left: 70 
    };

    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Paso 4: Dibujar la línea que muestra los valores de cierre de mercado
    const xScale = d3
        .scaleTime()
        .range([0, width]);
    const yScale = d3
        .scaleLinear()
        .range([height, 0]);

    xScale
        .domain(d3.extent(data, function(d) { return d.date; }));
    yScale
        .domain(d3.extent(data, function(d) { return d.close; }));

    const line = d3
        .line()
            .x(function(d) { return xScale(d.date); })
            .y(function(d) { return yScale(d.close); });

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // Agregar ejes x e y
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    svg.append("g")
        .call(d3.axisLeft(yScale));

    // Etiqueta del eje x
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom)
        .attr("text-anchor", "middle")
        .text("Fecha");

    // Etiqueta del eje y
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text("Cierre de mercado");
})
.catch(function(error) {
    console.log(error);
});
