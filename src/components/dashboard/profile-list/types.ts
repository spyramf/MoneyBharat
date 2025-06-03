
export interface UCCProfile {
  id: string;
  name: string;
  ucc_code: string;
  email: string;
  phone: string;
  pan_number: string;
  holding_type: string;
  kyc_status: string;
  ucc_status: string;
  created_date: string;
  last_transaction: string;
  aum: number;
  is_available: boolean;
}

export interface ProfileStats {
  activeUCC: number;
  pendingUCC: number;
  totalProfiles: number;
  availableUCC: number;
}
