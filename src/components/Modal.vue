<script>
export default {
    name: 'Modal'
}
</script>
<template>
<div class="container">
    <h1>Lista de clientes</h1>
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
        <p>Buscar</p>
        <input type="text">
    </div>
    <table>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
    </table>
</div>
</template>
<style scoped>
.filter {
    display: flex;
    height: 20px;
    align-items: center;

}

</style>
