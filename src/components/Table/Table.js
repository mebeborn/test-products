import React from 'react'

export default props => {

  const headerTitles = props.products[0] ? Object.keys(props.products[0]) : [];

  const tableHeader = headerTitles.map((key, index) => {
    return <th key={index}>{key}</th>
  });

  const tableRows = props.products.map(product => {
    const { id, name, price, quantity } = product;

    return (
      <tr className="text-center" key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    )
  });


  return (
    <table className="table table-striped table-bordered">
      <tbody>
        <tr className="text-center text-uppercase">{tableHeader}</tr>
        {tableRows.length ? tableRows : <tr className="text-center"><td>No results</td></tr>}
      </tbody>
    </table>
  )
}
