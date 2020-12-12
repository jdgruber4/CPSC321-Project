const players = [
    {Player_Name: "", Birthday: "", Jersey_Number: "", Touchdowns: ""}
    
]

const Teams = [
    {Team_Name: "", Wins: "", Losses: "", Draws: "", Superbowl_Wins: "", Season: ""}
]


const renderTeams = (Teams, index) => {
    return(
        <tr key={index}>
            <td>{Teams.Team_Name}</td>
            <td>{Teams.Wins}</td>
            <td>{Teams.Losses}</td>
            <td>{Teams.Draws}</td>
            <td>{Teams.Superbowl_Wins}</td>
            <td>{Teams.Season}</td>
        </tr>
    )
}