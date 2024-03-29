import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {

        api.get("transactions")
            .then(response => console.log(response.data))
        
    }, []);

    return (

        <Container>

            <table>

                <thead>

                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    
                </thead>

                <tbody>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1100,00</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1100,00</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                   
                </tbody>


            </table>

        </Container>

    );

}
