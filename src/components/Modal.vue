<script>
export default {
  name: "Modal",
  data() {
    return {
      tablet: [],
      select: [],
    };
  },
  mounted() {
    for (let i = 1; i < 11; i++) {
      this.tablet.push({ codigo: "", compania: "", rif: "", telefono: "" })
      this.select.push(i)
    }
  },
  
};
</script>
<template>
  <div class="container">
    <h1>Lista de clientes</h1>
    <div class="header">
      <div class="filter">
        <p>Mostrar</p>
        <select>
          <option v-for="item in select" :key="item">{{ item }}</option>
        </select>
        <p>Registros</p>
      </div>
      <div class="search">
        <p>Buscar</p>
        <input type="text" />
      </div>
    </div>
    <table>
      <tr class="headerTable">
        <th class="code">Codigo</th>
        <th>Compania</th>
        <th>Rif</th>
        <th>Telefono</th>
      </tr>
      <tr v-for="item in tablet">
        <td >{{item.codigo}}</td>
        <td>{{item.compania}}</td>
        <td>{{item.rif}}</td>
        <td>{{item.telefono}}</td>
      </tr>
      
    </table>
    <div class="footer">
      <p>1 al 10 de un Total de 453 registros</p>
      <div class="page">
        <button>Primero</button>
        <button>Anterior</button>
        <div class="numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <button>Siguiente</button>
        <button>Último</button>
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
.container {
  width: 50%;
  height: 400px;
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
