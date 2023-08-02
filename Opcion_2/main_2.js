const diCaprioBirthYear = 1974;
const today = new Date().getFullYear();

// funcion que calcula la edad para Leonardo DiCaprio
const calculateAge = (year) => year - diCaprioBirthYear;

// Parse the CSV data
d3.csv("data(2).csv").then((csvData) => {
    const data = csvData.map((d) => {
    return {
        year: +d.year,
        name: d.name,
        age: +d.age,
        diCaprioAge: calculateAge(+d.year),
    };
});

  // crea dimensiones y margenes para el grafico
const svgWidth = 800;
const svgHeight = 600;
const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60,
};

const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

  // Crea el contenedor SVG para las graficas de lineas y de barras
const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Crea escalas
const xScale = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.year), today])
    .range([0, width]);

const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => Math.max(d.age, d.diCaprioAge))])
    .range([height, 0]);

  // dibuja la linea del grafico para la edad de Leonardo DiCaprio
const drawLineGraph = (data) => {
    const line = d3
        .line()
        .x((d) => xScale(d.year))
        .y((d) => yScale(d.diCaprioAge));

    svg
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "blue");
};

  // Crea las barras para las edades de las exes
const drawBarGraph = (data) => {
    const barWidth = width / data.length;

    svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.year) - barWidth / 2)
        .attr("y", (d) => yScale(d.age))
        .attr("width", barWidth)
        .attr("height", (d) => height - yScale(d.age))
        .attr("fill", "orange");
};

  // agrega ejes
const addAxes = () => {
    const xAxis = d3
        .axisBottom(xScale)
        .tickFormat(d3.format("d"));
    const yAxis = d3
        .axisLeft(yScale);

    svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    svg
        .append("g")
        .attr("class", "y-axis")
        .call(yAxis);
};

  // agrega etiquetas
const addLabels = () => {
    svg
        .append("text")
        .attr("transform", `translate(${width / 2},${height + margin.bottom})`)
        .style("text-anchor", "middle")
        .text("Año");

    svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Edad");
};

  // Llama a las funciones para dibujar el grafico
drawLineGraph(data);
drawBarGraph(data);
addAxes();
addLabels();
});
