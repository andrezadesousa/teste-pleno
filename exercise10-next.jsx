/**
 * O componente Dashboard possui um layout com muitas divs aninhadas e markup duplicado
 * para montar sessões distintas da tela. Melhore a organização e clareza criando componentes
 * reutilizáveis para cada seção (Summary, Graph, Table) e aplique boas práticas de
 * composição visual.
 */
import Title from "./components/title";
import Box from "./components/box";
export default function Dashboard() {
  return (
    <div className="dashaboard">
      <Box>
        <div className="box">
          <Title value="Resumo" />
          <p>Dados resumidos...</p>
        </div>
      </Box>
      <Box>
        <Title value="Gráfico" />
        <canvas id="graph"></canvas>
      </Box>
      <Box>
        <table>
          <tbody>
            <tr>
              <td>Carregando...</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </div>
  );
}
