export type Reservoir = {
  name: string;
  capacity: number;
  volume: number;
  productId: number;
  isLocked: boolean;
  id: number;
  product: {
    name: string;
    id: number;
  };
};

export type CreateReservoirType = {
  name: string;
  capacity: number;
  volume: number;
  productId: number;
  isLocked: boolean;
};

export type UpadateReservoirType = {
  name: string;
  capacity: number;
  volume: number;
  productId: number;
};
