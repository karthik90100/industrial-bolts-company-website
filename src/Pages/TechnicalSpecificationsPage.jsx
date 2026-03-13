import React from 'react'
import BoltSpecification from '../components/technical-specifications/bolts-specifications.jsx';
import NutSpecification from '../components/technical-specifications/nut-specification.jsx';
import A563Specification from '../components/technical-specifications/a563-specification.jsx';
import HeroTwo from '../components/heroTwo.jsx';
function TechnicalSpecificationsPage() {
    return (
        <div>
            <HeroTwo />
            <BoltSpecification />
            <NutSpecification />
            <A563Specification />
        </div>
    )
}

export default TechnicalSpecificationsPage;
