/**
 * Melhore o código abaixo
 */
import React from "react";

//Criei um componente para o botão, dentro do próprio componente. Pois é só ele que usará esse btn
export default function Button({value}){
	return <button className="btn-primary">{value}</button>;
}

export default function Page() {
  return (
    <>
      <Button value="Salvar" />
      <Button value="Cancelar" />
    </>
  );
}
