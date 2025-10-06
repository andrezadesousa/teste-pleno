/**
 * Melhore o código abaixo
 */
const { React, useState, useEffect } = require("react");


//Criei um componente para o botão, dentro do próprio componente. Pois é só ele que usará esse btn
export default function Button({value}){
	return <button className="btn-primary">{value}</button>;
}

export default function Page() {
  const [value, setValue] = useState('Salvar')
  return (
      <Button value={value === 'Salvar' ? 'Salvar' : 'Cancelar'} />
  );
}
