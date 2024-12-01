import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import { StepIndicatorProps } from '@/src/types/StepIndicatorProps';
import StepIndicatorStyles from './styles/StepIndicatorStyles';

const StepIndicatorComponent: React.FC<StepIndicatorProps> = ({ currentPosition, labels }) =>  {
  
  return (
    <StepIndicator
      customStyles={StepIndicatorStyles}
      currentPosition={currentPosition}
      labels={labels}
      stepCount={labels.length}
    />
  );
};

export default StepIndicatorComponent;
