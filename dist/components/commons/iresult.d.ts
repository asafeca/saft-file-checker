export interface IDataResult {
  message: string;
  success: boolean;
}
export declare class DataResult implements IDataResult {
  message: string;
  success: boolean;
  constructor({ message, success }: { message: string; success: boolean });
}
