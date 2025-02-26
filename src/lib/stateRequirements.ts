export interface StateRequirements {
    [state: string]: {
      [profession: string]: {
        [category: string]: number; // Each category must have a numeric value
      };
    };
  }