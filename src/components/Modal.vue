<script>
import axios from "axios"
export default {
  name: "Modal",
  data() {
    return {
      tablet: [],
      select: [],
      modalActive: false,
      minPage: -1,
      maxPage: 10,
      numberList: 10,
      page: Number,
      itemsPage: 10,
      search: '',
      url: 'https://mocki.io/v1/3abed40a-124a-4aa9-8502-3ff4f2179866'
    };
  },

  mounted() {
    const api = async () => {
      const response = await axios.get(this.url)
      this.tablet = response.data 
      //this.page = Math.ceil(response.data.length / 10)
    }
    api()
    for (let i = 1; i < 11; i++) {
      this.select.push(i)
    }
    if (this.modalActive) {
      alert(this.$refs.selectPage)
    }
  },
  methods: {
    onChangeSelect(event) {
        this.itemsPage = Number(event.target.value)
        this.maxPage = Number(event.target.value)
    },
    searchCompany(){
      axios.get(this.url)
      .then(res => {
        this.tablet = res.data.filter(tablet => tablet.compania === this.search)
      })
    },
    primero(){
      this.minPage = -1
      this.maxPage = this.itemsPage
    },
    ultimo(){
      this.minPage = this.tablet.length - this.itemsPage - 1
      this.maxPage = this.tablet.length
    },
    siguiente(number){
      if (this.maxPage < this.tablet.length) {
        this.minPage = this.minPage + number
        this.maxPage = this.maxPage + number
      }
    },
    anterior(number){
      if (this.minPage > this.tablet.indexOf(this.tablet[0])) {
        this.minPage = this.minPage - number
        this.maxPage = this.maxPage - number
      }
    },
  }
};
</script>
<template>
  
  <button v-if="modalActive === false" @click="modalActive = true">Data</button>
  <div v-if="modalActive" class="container">
    <h1 style="display:flex; justify-content:space-between;">Lista de clientes <img src="@/components/icons/cerrar.png" @click="modalActive = false" style="width:25px; height:25px; cursor: pointer" alt="X"></h1>
    <div class="header">
      <div class="filter">
        <p>Mostrar</p>
        <select ref="selectPage" @change="onChangeSelect($event)">
          <option v-for="item in select" :selected="item === 10" :key="item">{{ item }}</option>
        </select>
        <p>Registros</p>
      </div>
      <div class="search">
        <p>Buscar</p>
        <input v-model="search" v-on:keyup.enter="searchCompany" type="text" />
      </div>
    </div>
    <table>
      <tr class="headerTable">
        <th class="code">Codigo</th>
        <th>Compania</th>
        <th>Rif</th>
        <th>Telefono</th>
      </tr>
      <tr v-for="(item, index) in tablet" :key="index">
        <td v-show="index > minPage && index < maxPage" :style="[index % 2 === 0 ? 'background: #d3d6ff' : 'background: #eaebff']">{{item.codigo}}</td>
        <td v-show="index > minPage && index < maxPage" :style="[index % 2 === 0 ? 'background: #e2e3ff' : 'background: white']">{{item.compania}}</td>
        <td v-show="index > minPage && index < maxPage" :style="[index % 2 === 0 ? 'background: #e2e3ff' : 'background: white']">{{item.rif}}</td>
        <td v-show="index > minPage && index < maxPage" :style="[index % 2 === 0 ? 'background: #e2e3ff' : 'background: white']">{{item.telefono}}</td>
      </tr>
      
    </table>
    <div class="footer">
      <p>1 al {{ itemsPage }} de un Total de {{tablet.length}} registros</p>
      <div class="page">
        <button @click="primero">Primero</button>
        <button @click="anterior(itemsPage)">Anterior</button>
        <!--
        <div class="numbers">
          <p v-if="page >= 1">1</p>
          <p v-if="page >= 2" @click="siguiente(10)">2</p>
          <p v-if="page >= 3" @click="siguiente(20)">3</p>
          <p v-if="page >= 4" @click="siguiente(30)">4</p>
          <p v-if="page >= 5" @click="siguiente(40)">5</p>
        </div>
        -->
        <button @click="siguiente(itemsPage)">Siguiente</button>
        <button @click="ultimo">Último</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 23px;
  color:  #5f87bb;
  border-bottom-style: solid;
  border-bottom-width: 0.1px;
  border-bottom-color: #aeadac;
}
button {
  cursor: pointer
}
.container {
  width: 50%;
  height: 400px;
  position: absolute;
  z-index: 2;
  top: 15vh;
  left: 26vw;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 15px;
   color: #202020;
}
table {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  width: 100%;
  border-spacing: 0.3px;
  color: #202020;
}
tr {
  text-align: center;
}
td {
  height: 30px;
}
th{
  background: linear-gradient(to bottom, rgb(241, 241, 241), rgb(225, 225, 225), rgb(241, 241, 241));
  
}
button {
  height: 25px;
  border-radius: 3px;
  border: 1px solid #a4a4a4;
}

.code {
  width: 80px;
}
.header {
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 5px;
  background: linear-gradient(to bottom, rgb(224, 224, 224), rgb(195, 195, 195), rgb(224, 224, 224));
  border-radius: 5px 5px 0px 0px;
  border: 1px solid #aeadac;
}
.filter {
  display: flex;
  align-items: center;
}

.filter p, select {
  margin-right: 5px;
}

.search {
  display: flex;
  align-items: center;
}
.search input {
  margin-left: 5px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgb(224, 224, 224), rgb(195, 195, 195), rgb(224, 224, 224));
  border-radius: 5px 5px 0px 0px;
  border: 1px solid #aeadac;
  padding: 3px 10px;
}
.page {
  display: flex;
  align-items: center;
}
.numbers {
  display: flex;
}
.numbers p {
  height: 23px;
  border: 1px solid #a4a4a4;
  border-radius: 3px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
</style>
