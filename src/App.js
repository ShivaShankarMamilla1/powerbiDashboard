// import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client"


function App() {
  return (
    <div className="App">

      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "1c7c5913-f2fd-4fb3-b89f-8a65e1dc1d6a",
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1c7c5913-f2fd-4fb3-b89f-8a65e1dc1d6a&groupId=4b39d1e5-8d21-45df-be7b-9e702135acc6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",

          accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvM2ZmN2QzNWUtNzI2MS00NWIyLWEzMTQtZGYwODRlOWEyMWI3LyIsImlhdCI6MTY4NzM0ODU2MywibmJmIjoxNjg3MzQ4NTYzLCJleHAiOjE2ODczNTMwNDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFCVnJ3WmZzM1FSa3N3dG1nTVdQbUJ4NWZULy9MM2gwRWxMVVN1eUN1SlgvaTdjOSt5R3h5amRTYlB5TGg3VlI2IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTWFtaWxsYSIsImdpdmVuX25hbWUiOiJTaGl2YSBTaGFua2FyIiwiaXBhZGRyIjoiMTgzLjgyLjEyNS40MyIsIm5hbWUiOiJTaGl2YSBTaGFua2FyIE1hbWlsbGEiLCJvaWQiOiIyMzE3ODEzMS02NTQ2LTQ1ZTktOTI0ZC0zMjRmNmY2MGZlMWEiLCJwdWlkIjoiMTAwMzIwMDI5MDZGOTI4MyIsInB3ZF9leHAiOiIzMTE2OTYzMDYiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wcm9kdWN0aXZpdHkuc2VjdXJlc2VydmVyLm5ldC9taWNyb3NvZnQ_bWFya2V0aWQ9ZW4tVVNcdTAwMjZlbWFpbD1zaGl2YS5tYW1pbGxhJTQwYWlmYWxhYnMuY29tXHUwMDI2c291cmNlPVZpZXdVc2Vyc1x1MDAyNmFjdGlvbj1SZXNldFBhc3N3b3JkIiwicmgiOiIwLkFYMEFYdFAzUDJGeXNrV2pGTjhJVHBvaHR3a0FBQUFBQUFBQXdBQUFBQUFBQUFDYUFHWS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJHU3Rtdm9VbTgwLUwwTlR6RnRGbUJBdHpzZE1XWHhvNFh5U2hPY0xaN09BIiwidGlkIjoiM2ZmN2QzNWUtNzI2MS00NWIyLWEzMTQtZGYwODRlOWEyMWI3IiwidW5pcXVlX25hbWUiOiJzaGl2YS5tYW1pbGxhQGFpZmFsYWJzLmNvbSIsInVwbiI6InNoaXZhLm1hbWlsbGFAYWlmYWxhYnMuY29tIiwidXRpIjoiNzUwSVRVYml2a3FmU3FVZ0J5QVRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.erwCAXAoPjT6MFhG8ofRh63BhAjNy89ryqw1lsMrboDhVCD9rzw-8BLbkrn684Nlx1Xu4_bCd220P8ckdgxDKAWlH7iRCqwWODIZqr32Lsw8cjqn3dRvEPldq5PGgyBGFF19DhBt2Gym4OaXfG-_eki8UHPESGAwrWXEXFGcJZ5fByIjrdxB0YgIpfDN2dZAUCjbB6GqqlMPIBfagS4fNXDKSFFan2457XMCDJRaDDVnFU6GPO0COrfQRAYRlW-yk6WRrhBvfcsbESfLwfee-r21ocDUqQ0hfjwk1fWUkDpMqdrYUpznzB2fSR028VIkkbKS4O_MSQkVwsKGncqdaQ",
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
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <img src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-796.jpg" style={{ height: "200px", marginLeft: "auto" }} alt="icon" />
      </div>
    </div>
  );
}

export default App;
