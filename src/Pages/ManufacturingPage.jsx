import React from 'react'
import InspectionOfRawMaterials from '../components/manufacture-capabilities/inspection-of-raw-materials.jsx'
import Cutting from '../components/manufacture-capabilities/cutting.jsx';
import ChamferingSection from '../components/manufacture-capabilities/chamfering-section.jsx';
import PlateFabricationSection from '../components/manufacture-capabilities/plate-fabrication-section.jsx';
import HeroTwo from '../components/heroTwo.jsx';
function ManufacturingPage() {
    return (
        <div>
            <HeroTwo />
            <InspectionOfRawMaterials />
            <Cutting />
            <ChamferingSection />
            <PlateFabricationSection />
        </div>
    )
}

export default ManufacturingPage;
