import React from "react";

// [
//   {id: 0, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Bud-Light.jpeg', name: 'Bud Light', price: '$26.99'},
//   {id: 1, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Coors-Light-Lager-Beer.jpeg', name: 'Coors Light Lager Beer', price: '$21.99'},
//   {id: 2, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Miller-Lite-Lager-Beer.jpeg', name: 'Miller Lite Lager Beer', price: '$21.99'},
//   {id: 3, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Corona-Extra.jpeg', name: 'Corona Extra', price: '$18.39'},
//   {id: 4, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Michelob-ULTRA.jpeg', name: 'Michelob ULTRA', price: '$24.99'},
//   {id: 5, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Stella-Artois.jpeg', name: 'Stella Artois', price: '$18.62'},
//   {id: 6, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Modelo-Especial.jpeg', name: 'Model Especial', price: '$18.49'},
//   {id: 7, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Guinness-Draught.jpeg', name: 'Guinness Draught', price: '$10.29 '},
//   {id: 8, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Blue-Moon-Belgian-White-Wheat-Beer.jpeg', name: 'Blue Moon Belgian White Wheat Beer', price: '$17.99'},
//   {id: 9, imagePath: 'https://wikiliq.org/wp-content/uploads/2021/02/Heineken-Lager.jpeg', name: 'Heineken Lager', price: '$17.99'},
// ]

class BeerTable extends React.Component {
  render() {
    const { beers } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Prezzo</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => {
            return (
              <tr key={beer.id}>
                {Object.entries(beer).map(([key, value]) => {
                  return (
                    <td key={key}>
                      {key === "imagePath" ? (
                        <img alt={value} src={value} height="160" width="90" />
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default BeerTable;
