

function BaseStats({ hp, attack, defense, speed, clicker}) {
    // const { stats } = props; // Destructure stats from props
    // const {hp, attack, defense, speed, clicker} = stats;
  
    return (
        <div className="base-stats">
        <h1>Base Stats</h1>
        {/* Button to trigger the clicker function */}
        <button className="sp-stats" onClick={clicker}>
            Check Special Stats
        </button>
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BaseStats;