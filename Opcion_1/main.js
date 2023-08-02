

// CHART START
// 1. aquí hay que poner el código que genera la gráfica

let years;
let winners;
let originalData;

// data:
d3.csv("WorldCup.csv")
    .then(data => {
        originalData = data;
        // Prepare the data for the chart
        // data = data.filter(d => d.Year < 1955)
        years = data.map(d => +d.Year);
        winners = data.map(d => d.Winner);
        // update:
        update(winners);
        slider();
});

// update:
function update(data) {
    // 3. función que actualiza el gráfico
    const chartDiv = d3
        .select("#chart");
    chartDiv
        .selectAll("*")
        .remove(); // Clear previous chart

    const margin = { 
        top: 30, 
        right: 30, 
        bottom: 70, 
        left: 60 
    };
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = chartDiv
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
        .scaleBand()
        .domain(winners)
        .range([0, width])
        .padding(0.2);

    const y = d3
        .scaleLinear()
        .domain([0, d3
            .max(data, d => data
            .filter(val => val === d).length
            )])
        .range([height, 0]);

    const xAxis = d3
        .axisBottom(x);
    const yAxis = d3
        .axisLeft(y);

    svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    svg
        .append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    const bars = svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d))
        .attr("y", d => y(data
            .filter(val => val === d).length))
        .attr("width", x
            .bandwidth())
        .attr("height", d => height - y(data
            .filter(val => val === d).length));

}


// treat data:
function filterDataByYear(year) {
    // 4. función que filtra los datos dependiendo del año que le pasemos (year)
    return originalData
        .filter((d) => d.Year <= String(year))
        .map((d) => d.Winner);
}

// CHART END

// slider:
function slider() {
    // esta función genera un slider:
    var sliderTime = d3
        .sliderHorizontal()
        .min(d3.min(years)) // rango años
        .max(d3.max(years))
        .step(4) // cada cuánto aumenta el slider (4 años) cada mundial
        .width(580) // ancho de nuestro slider en px
        .ticks(years.length)
        .default(years[years.length - 1]) // punto inicio del marcador
        .on('onchange', val => {
            // 5. AQUÍ SÓLO HAY QUE CAMBIAR ESTO:


            console.log(val);

            // TODO repintar el gráfico con los datos filtrados en cada onchange TODO

        const filteredData = filterDataByYear(val);
            update(filteredData);
            
            d3
                .select('p#value-time')
                .text(val); // actualiza el año que se representa
        });

    // contenedor del slider
    var gTime = d3
        .select('div#slider-time') // div donde lo insertamos
        .append('svg')
        .attr('width', 800)
        .attr('height', 200)
        .append('g')
        .attr('transform', 'translate(30,30)');

    gTime.call(sliderTime); // invocamos el slider en el contenedor

    d3
        .select('p#value-time')
        .text(sliderTime.value()); // actualiza el año que se representa
}
