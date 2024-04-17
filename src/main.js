import './assets/main.css';
import MyChart from '@/chart.vue';

const checkValue = (obj)=>{
    let isEmpty = false;
    for(const prop in obj){
        if(obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty
}

const addSuccess = ()=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: "L'ajout a été effectué avec succès.",
        showConfirmButton: false,
        timer: 1500
      });
}

const delSuccess = () => {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    });
}

const majSuccess = ()=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Mise à jour effectué avec succès.",
        showConfirmButton: false,
        timer: 1500
      });
}

const App = {
    data(){
        return{
            teachs: {
                matricule: "",
                nom: "",
                tauxHoraire: "",
                nbHeure: ""
            },
            localDB: [],
            myChart: null
        }
    },

    mounted(){
        this.submitTeach();
        this.localDB = getLocalDB();
        deleteTeach(teach);
        saveTeach(teach);
        calculateTotalPrestation();
        test();
        calculerMaxPrestation();
        calculerMinPrestation();
    },

    methods:{
        calculatePrestation(teach) {
            return teach.tauxHoraire * teach.nbHeure;
        },
        calculateTotalPrestation() {
            var totalPrestation = 0;
            
            this.localDB.forEach(teach => {
                totalPrestation += this.calculatePrestation(teach);
            });
            return totalPrestation;
        },
        calculerMaxPrestation() {
            const maxPrestation = this.localDB.reduce((max, teach) => {
                const prestation = this.calculatePrestation(teach);
                return prestation > max ? prestation : max;
            }, this.calculatePrestation(this.localDB[0])); 
            return maxPrestation;
        },
        calculerMinPrestation() {
            var minPrestation = this.calculatePrestation(this.localDB[0]);
        
            this.localDB.forEach(teach => {
                const prestation = this.calculatePrestation(teach);
                if (prestation < minPrestation) {
                    minPrestation = prestation;
                }
            });
            return minPrestation;
        },
        submitTeach(){
            if(!checkValue(this.teachs)){
                addTeach(this.teachs)
                console.log("c ok")
                this.teachs = {
                    matricule: "",
                    nom: "",
                    tauxHoraire: "",
                    nbHeure: ""
                };
                this.localDB = getLocalDB();
                addSuccess();
            }
        },
        deleteTeach(teach) {
            delSuccess().then((result) => {
                if (result.isConfirmed) {
                    console.log("c supp");
                    deleteTeach(teach);
                    this.localDB = getLocalDB();
                }
            });
        },
        updateCell(teach, field, event) {
            const updatedValue = event.target.textContent.trim();
            if (teach[field] !== updatedValue) {
                teach[field] = updatedValue;
                updateTeach(teach);
            }
        },
        saveTeach(teach) {
            updateTeach(teach);
            majSuccess();
        },
    },
    components: {
        MyChart, 
      },
    
}

Vue.createApp(App).mount("#app")