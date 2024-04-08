<template>
    <div class="table">
        <table>
          <thead>
            <tr>
              <th scope="col" class="bold">Matricule</th>
              <th scope="col" class="bold">Nom</th>
              <th scope="col" class="bold">Taux horaire</th>
              <th scope="col" class="bold">Nombre d'heures</th>
              <th scope="col" class="bold">Prestation</th>
              <th scope="col" class="bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="peoples in people" :key="people.id" :class="{'bgc-light': getModuleType(people.id)}" class="text-center">
              <td>{{ peoples.matricule }}</td>
              <td>{{ peoples.nom }}</td>
              <td>{{ peoples.tauxHoraire }}</td>
              <td>{{ peoples.nbHeure }}</td>
              <td>{{ getPrestation(peoples.tauxHoraire, peoples.nbHeure) }}</td>
              <td>
                <div class="imgs">
                  <img src="./icons/check.svg" @click="goodJob">
                  <img src="./icons/trash.svg" @click="toDelete">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
  </div>
  <div class="boutton">
    <input type="button" value="ajouter" class="btn btn-primary" @click="ajoutTab">
  </div>
</template>


<script setup>

    let people = [];

async function getAllDb(){
   try {
        const res = await axios.get('http://localhost:80/src/components/api.php');
        const data = res.data;
        localStorage.setItem('people', JSON.stringify(data));
        console.log(people);
        //  people.splice(0, people.length, ...data);
     } catch (error) {
         console.error('Error fetching data:', error);
     }
  // const res = await fetch('/api.php');
  // const { results } = await res.json();
  // console.log(results);
}

const storedData = localStorage.getItem('people');
if (storedData) {
  people = JSON.parse(storedData); // Récupérez les données depuis localStorage
}

getAllDb();

function getModuleType(id) {
  return id % 2 !== 0;
}

function getPrestation(taux, heure) {
  return taux * heure;
}

function goodJob(){
  Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
}

function toDelete(){
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}

</script>

<style scoped>
    .table{
      margin: auto;
      width: 95%;
    }
    .text-center{
      text-align: center;
      /* padding: auto; */
      height: 50px;
    }
    .bgc-light{
      background-color: rgb(74, 70, 70);
    }
    .bold{
      text-transform: uppercase;
      font-weight: 600;
      height: 50px;
    }
    th{
      color: #fff;
      text-align: center;
    }
    td{
      width: 5%;
    }
    .imgs{
      display: flex;
      justify-content: center;
    }
    img{
      margin: 5px;
      opacity: .5;
      transition: .5s ease-out;
    }
    img:hover{
      opacity: .8;
    }
    .boutton{
      margin: 20px;
      margin-left: 92%;
    }
    .btn{
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 550;
      color: #ffffffd5;
    }
</style>