import { Route, Routes} from 'react-router-dom';
import Info from "./components/Info"
import Plan from "./components/Plan"
import AddOnsMn from "./components/Addons-mo";
import AddOnsYr from "./components/Addons-yr";
import SummaryMn from "./components/SummaryMn";
import SummaryYr from "./components/SummaryYr";
import Success from "./components/Success";


export default function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addons-mn" element={<AddOnsMn />} />
        <Route path="/addons-yr" element={<AddOnsYr />} />
        <Route path="/summary-mn" element={<SummaryMn />} />
        <Route path="/summary-yr" element={<SummaryYr />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
