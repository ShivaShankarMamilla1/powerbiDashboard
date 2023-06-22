// import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client"
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>

      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "766dae3c-ac8a-464a-88a4-0cefd2115e43",
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=766dae3c-ac8a-464a-88a4-0cefd2115e43&groupId=4b39d1e5-8d21-45df-be7b-9e702135acc6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",

          accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvM2ZmN2QzNWUtNzI2MS00NWIyLWEzMTQtZGYwODRlOWEyMWI3LyIsImlhdCI6MTY4NzQyNjIxNiwibmJmIjoxNjg3NDI2MjE2LCJleHAiOjE2ODc0MzA4NDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFQc1p6S1p0MGd0YUI3QUFzTTNJV25XV083cW44T3NaaEhma1NIT3pETzlWUUMzR2duVkhCR1IrYktWcnNzb01GIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTWFtaWxsYSIsImdpdmVuX25hbWUiOiJTaGl2YSBTaGFua2FyIiwiaXBhZGRyIjoiMTgzLjgyLjEyNS40MyIsIm5hbWUiOiJTaGl2YSBTaGFua2FyIE1hbWlsbGEiLCJvaWQiOiIyMzE3ODEzMS02NTQ2LTQ1ZTktOTI0ZC0zMjRmNmY2MGZlMWEiLCJwdWlkIjoiMTAwMzIwMDI5MDZGOTI4MyIsInJoIjoiMC5BWDBBWHRQM1AyRnlza1dqRk44SVRwb2h0d2tBQUFBQUFBQUF3QUFBQUFBQUFBQ2FBR1kuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiR1N0bXZvVW04MC1MME5UekZ0Rm1CQXR6c2RNV1h4bzRYeVNoT2NMWjdPQSIsInRpZCI6IjNmZjdkMzVlLTcyNjEtNDViMi1hMzE0LWRmMDg0ZTlhMjFiNyIsInVuaXF1ZV9uYW1lIjoic2hpdmEubWFtaWxsYUBhaWZhbGFicy5jb20iLCJ1cG4iOiJzaGl2YS5tYW1pbGxhQGFpZmFsYWJzLmNvbSIsInV0aSI6Im1WQkFub0hPajBLSlhqTHdzVGM4QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.RjCxn6P6Dbjjy1Uf1tvZ59D_ccrw5T4pLYk-0M90gRKELPF9AVAjfUegQX6UIWf7LQJSYO4ro6EA0W9ff49fIb5fMZKa6lRucZ_F9Do6OS7xWRx5exL-bRt-FaFZ8nGN6afDXWfcmGzGo2ReaQ5oGGOKIuNX8019-gGe1L6d2-vfrfSdcs14-U_-o-F7BTX9hoItzugsL0-9m6SqaAWqvlTFcBIOQIuE8UoIODFuWy8SIEWpf6jB8zOScqMed-wXwNvTyOHrDlNGFK_ivJ1w2a-t7avz4guiVFijR2jTn7R2AYU2WiJmDxyNOoZVTYnGUckZEO8O9_p5fEKLDtsQew",
          // accessToken: "access-token",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            // background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
          ])
        }

        cssClassName={"embed-conatiner"}

        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport
        }}



      />
      <div style={{ position: "absolute", top: "550px", left: "1300px" }}>
        <img src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-796.jpg" style={{ height: "150px" }} alt="icon" />
      </div>

    </div>
  );
}

export default App;
