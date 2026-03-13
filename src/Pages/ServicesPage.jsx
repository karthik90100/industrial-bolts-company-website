import ThreadingServices from '../components/services/threading-services.jsx'
import HeatTreatment from '../components/services/heat-treatmeant.jsx';
import PlatingServices from '../components/services/plating-service.jsx';
import ElectroplatingServices from '../components/services/electroplating-services.jsx';
import HeroTwo from "../components/heroTwo.jsx";


function ServicesPage() {
  return (
    <div >
      <HeroTwo />
      <ThreadingServices />
      <HeatTreatment />
      <PlatingServices />
      <ElectroplatingServices />
    </div>
  )
}

export default ServicesPage
