<template>
  <div class="bar-chart"></div>
</template>

<script>
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default {
  mounted() {
    // const appInstance = App(); 

    // const maxPrestation = appInstance.calculerMaxPrestation();
    // const minPrestation = appInstance.calculerMinPrestation();



    // Données pour le graphique à barres
    const data = [
      { letter: 'Total', frequency: 7059, color: 'rgb(0,10,80)' },
      { letter: 'Maximum', frequency: 3072, color: 'rgb(50,60,100)' },
      { letter: 'Minimum', frequency: 378, color: 'rgb(20,90,100)' }
    ];

    // Dimensions et marges du graphique
    const width = 500;
    const height = 400;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    // Échelle pour l'axe horizontal (x)
    const x = d3.scaleBand()
      .domain(data.map(d => d.letter))
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    // Échelle pour l'axe vertical (y)
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.frequency)])
      .range([height - marginBottom, marginTop]);

    // Créer le conteneur SVG
    const svg = d3.select('.bar-chart')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .attr('viewBox', `0 0 ${width} ${height}`)
                  .attr('style', 'max-width: 100%; height: auto;');

    // Ajouter une barre pour chaque élément de données
    svg.append('g')
       .attr('fill', 'steelblue')
       .selectAll('rect')
       .data(data)
       .join('rect')
       .attr('x', d => x(d.letter))
       .attr('y', d => y(d.frequency))
       .attr('height', d => y(0) - y(d.frequency))
       .attr('width', x.bandwidth())
        .attr('fill', d => d.color);

    // Ajouter l'axe des x et son libellé
    svg.append('g')
       .attr('transform', `translate(0,${height - marginBottom})`)
       .call(d3.axisBottom(x).tickSizeOuter(0));

    // Ajouter l'axe des y et son libellé, et supprimer la ligne de domaine
    svg.append('g')
       .attr('transform', `translate(${marginLeft},0)`)
       .call(d3.axisLeft(y).tickFormat(y => (y).toFixed()))
       .call(g => g.select('.domain').remove())
       .call(g => g.append('text')
           .attr('x', -marginLeft)
           .attr('y', 10)
           .attr('fill', 'currentColor')
           .attr('text-anchor', 'start')
           .text('↑ Prestation'));
  }
}
</script>

<style scoped>
.bar-chart {
  width: 100%;
  height: auto;
}
</style>
