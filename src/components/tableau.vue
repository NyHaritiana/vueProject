<template>
    <div>
        <table class="lenght-tab">
          <thead>
            <tr class="transform">
              <th class="bold">Matricule</th>
              <th class="bold">Nom</th>
              <th class="bold">Taux horaire</th>
              <th class="bold">Nombre d'heures</th>
              <th class="bold">Prestation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in people" :key="person.id" :class="{'bgc-light': getModuleType(person.id)}" class="text-center">
              <td>{{ person.matricule }}</td>
              <td>{{ person.name }}</td>
              <td>{{ person.taux }}</td>
              <td>{{ person.heure }}</td>
              <td>{{ getPrestation(person.taux, person.heure) }}</td>
              <td>{{ image }}</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>


<script setup>
    const people = [
  { id: 1, matricule: 2024, name: 'Alice', taux: 25, heure: 5 },
  { id: 2, matricule: 2025, name: 'Bob', taux: 30, heure: 4 },
  { id: 3, matricule: 2026, name: 'Charlie', taux: 35, heure: 6 }
];

function getModuleType(id) {
  return id % 2 !== 0;
}

function getPrestation(taux, heure) {
  return taux * heure;
}
</script>

<style scoped>
    .lenght-tab{
        margin: auto;
        width: 95%;
        border-collapse: collapse;
        border: 1px solid #bab5b5;  
    }
    .text-center{
        text-align: center;
        padding: auto;
        height: 50px;
    }
    .bgc-light{
        background-color: rgb(74, 70, 70);
    }
    .transform{
        text-transform: uppercase;
        height: 50px
    }
    .bold{
        font-weight: 600;
    }
    td{
        width: 20%;
    }
</style>