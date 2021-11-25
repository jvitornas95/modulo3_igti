// import { getEventsEndpoints } from "./backend";
import { Button } from "@material-ui/core";
import { CalendarScreen } from "./components/CalendarScreen";

function App() {
  // getEventsEndpoints().then(events => {
  //   for (const event of events){
  //     console.log(event);
  //   }
  // });

  return (
    <div>
      <CalendarScreen />
    </div>
  );
}

export default App;
