interface RawAircraftType {
  manufacturer?: string;
  type?: string;
}

export interface AdsbdbAircraftResponse {
  response?: { aircraft?: RawAircraftType };
}
