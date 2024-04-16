async function getData()
{
    await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json =>  data = json)


    console.log(data);
    
    let table = '';

    data.products.forEach(element => {
        table += `
        <tr>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>${element.discountPercentage}</td>
        <td>${element.rating}</td>
        <td>${element.stock}</td>
        <td><b>${element.brand}</b></td>
        </tr>`
    });
    

    $('#tbody').html(table);


    $('#example').DataTable( {
    'data' : data.products,
    columns: [
        {data: 'title'}	,
        {data: 'description'}	,
        {data: 'discountPercentage'},
        {data: 'rating'}	,
        {data: 'stock'}	,
        {data: 'brand'}	, ]
} );
}

getData();
