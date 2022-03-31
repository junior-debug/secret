<script>
export default {
  name: "Modal",
  data() {
      return {
          table: [],
          colorTable: []
      }
  },
  mounted(){
    for (let i = 1; i < 11; i++) {
      this.table.push('')
    }
  }
};
</script>
<template>
  <div class="container">
    <h1>Lista de clientes</h1>
    <div class="header">
        <div class="filter">
            <p>Mostrar</p>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10" selected>10</option>
            </select>
            <p>Registros</p>
        </div>
        <div class="search">
            <p>Buscar</p>
            <input type="text" />
        </div>
    </div>
    <table>
      <tr>
        <th class="code">Codigo</th>
        <th>Compania</th>
        <th>Rif</th>
        <th>Telefono</th>
      </tr>
      <tr v-for="item in table">
        <td style="">{{item}}</td>
        <td style="">{{item}}</td>
        <td style="">{{item}}</td>
        <td style="">{{item}}</td>
      </tr>
    </table>
    <div class="footer">
      <p>1 al 10 de un Total de 453 registros</p>
      <div class="page">
        <button>Primero</button>
        <button>Anterior</button>
        <div class="numbers">
          <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
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
}
.container {
    width: 50%;
    height: 400px;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 15px;
}
table {
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 15px;
  width: 100%;
}
tr {    
  text-align:center;
}
td {
  height: 30px;
  background: rgb(170, 228, 255);
}
button {
  height: 25px;
}
.code{
  width: 80px;
}
.header {
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
}
.filter {
    display: flex;
    align-items: center;
}
.search {
    display: flex;
    align-items: center;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page {
  display: flex;
  align-items: center;
}
.numbers{
  display: flex;
}
</style>
