export interface StepIndicatorProps {
    currentPosition: number;
    labels: string[];
  }
  
  //Plantas
  export interface Disease {
    disease_id: number;
    plant_id: number;
    name: string;
    description: string;
    symptoms: string;
    prevention: string;
    treatment: string;
    example_images: string;
  }
  