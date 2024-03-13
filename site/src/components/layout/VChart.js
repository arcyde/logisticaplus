import { useState, useEffect } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryLine, VictoryLabel } from 'victory';
import styles from './RotaModal.module.css'

function Tabela({ dados }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Ordem</th>
            <th>Localização</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
                <td>{index+1}</td>
              <td>{item.x}, {item.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

function VChart({ data }) {
    const [fetchedData, setFetchedData] = useState(null);
    const [fetchCompleted, setFetchCompleted] = useState(false);

    useEffect(() => {
        if (!data) {
            fetch('http://localhost:3500/clientes')
                .then(response => response.json())
                .then(data => {
                    const formattedData = data.map(item => ({ x: Number(item.locatex), y: Number(item.locatey) }));
                    formattedData.unshift({ x: 0, y: 0 });
                    //formattedData.push({ x: 0, y: 0 });

                    fetch('http://localhost:3500/calcular-rota', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formattedData),
                    }).then(response => response.json())
                      .then(data => {
                        setFetchedData(data.shortestRoute);
                        setFetchCompleted(true);
                      }).catch(err => console.log(err))
                }).catch(err => console.log(err));
        }
    }, [data]);

    const plotData = fetchCompleted ? fetchedData : data;
    
    return (
        <div>
            <div className={styles.container}>
               <div className={styles.left}>
               <div>
      {fetchCompleted && <Tabela dados={fetchedData} />}
    </div>
               </div>
               <div className={styles.right}>
               <VictoryChart 
            domain={{ x: [-10, 10], y: [-10, 10] }}
            height={150}
            width={200}
            padding={{ top: 20, bottom: 50, left: 50, right: 20 }}
        >
            <VictoryAxis 
                tickValues={[-10, -5, 0, 5, 10]}
                tickFormat={[-10, -5, 0, 5, 10].map(String)}
                label="Y"
                style={{
                    tickLabels: { fontSize: 5 },
                    axisLabel: { fontSize: 3 }
                }}
                
            />
            <VictoryAxis
                dependentAxis
                tickValues={[-10, -5, 0, 5, 10]}
                tickFormat={[-10, -5, 0, 5, 10].map(String)}
                label="X"
                style={{
                    tickLabels: { fontSize: 4 },
                    axisLabel: { fontSize: 4 }
                }}
            />
            <VictoryLine
                        style={{
                            data: { stroke: 'red', strokeWidth: 1 },
                        }}
                        data={plotData}
                        interpolation="linear"
                        sortKey="null"
                    />
            <VictoryScatter
                style={{ data: { fill: 'blue' }}}
                size={1}
                data={plotData}
                
            />
        </VictoryChart>
               </div>
             </div>
        </div>
        
    );
};

export default VChart;