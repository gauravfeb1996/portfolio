import {
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineArrowUpTray,
} from 'react-icons/hi2';
import { Pill } from './Pill.jsx';
import './SpinnyCatalogue.css';

export function SpinnyCatalogue() {
  const steps = [
    [HiOutlineMagnifyingGlass, 'Inspect'],
    [HiOutlineCheckCircle, 'Validate'],
    [HiOutlineUserGroup, 'Review'],
    [HiOutlineArrowUpTray, 'Publish'],
  ];

  return (
    <div className="product catalogue">
      <div className="mock-sidebar">
        <b>◆ Spinny</b>
        <span>▣ Catalogue</span>
        <span className="active">● Vehicles</span>
        <span>● Media</span>
        <span>● Quality Check</span>
        <span>● Publishing</span>
      </div>
      <div className="vehicle-list">
        <h4>Vehicles</h4>
        <div className="search">⌕ Search by make, model or stock ID...</div>
        {['Maruti Swift', 'Hyundai Creta', 'Tata Nexon', 'Mahindra XUV700'].map((vehicleName, vehicleIndex) => (
          <div className="vehicle" key={vehicleName}>
            <i>🚘</i>
            <span>
              <b>{vehicleName}</b>
              <small>
                STN{vehicleIndex + 1}30 · 202{vehicleIndex + 1}
              </small>
            </span>
            <Pill tone={vehicleIndex === 2 ? 'coral' : vehicleIndex === 1 ? 'blue' : 'green'}>
              {vehicleIndex === 2
                ? 'Needs attention'
                : vehicleIndex === 1
                  ? 'In review'
                  : vehicleIndex === 3
                    ? 'Published'
                    : 'Ready to publish'}
            </Pill>
          </div>
        ))}
      </div>
      <div className="steps">
        {steps.map(([StepIcon, stepLabel], stepIndex) => (
          <div className="workflow-step" key={stepLabel}>
            <span className="step-content">
              <StepIcon />
              <b>{stepLabel}</b>
              {stepIndex < 3 && <i className="step-connector" aria-hidden="true" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
