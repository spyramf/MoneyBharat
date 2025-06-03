
import { UCCProfile } from './types';

export const mockProfiles: UCCProfile[] = [
  {
    id: '1',
    name: 'RAJESH KUMAR',
    ucc_code: 'BSE123456789',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    pan_number: 'ABCDE1234F',
    holding_type: 'Single',
    kyc_status: 'Verified',
    ucc_status: 'Active',
    created_date: '2024-01-15',
    last_transaction: '2024-05-20',
    aum: 250000,
    is_available: true
  },
  {
    id: '2',
    name: 'PRIYA SHARMA',
    ucc_code: 'BSE987654321',
    email: 'priya.sharma@email.com',
    phone: '+91 9876543211',
    pan_number: 'FGHIJ5678K',
    holding_type: 'Joint',
    kyc_status: 'Pending',
    ucc_status: 'Inactive',
    created_date: '2024-02-10',
    last_transaction: '2024-03-15',
    aum: 180000,
    is_available: false
  },
  {
    id: '3',
    name: 'AMIT PATEL',
    ucc_code: 'BSE456789123',
    email: 'amit.patel@email.com',
    phone: '+91 9876543212',
    pan_number: 'KLMNO9012P',
    holding_type: 'Single',
    kyc_status: 'Verified',
    ucc_status: 'Active',
    created_date: '2024-03-01',
    last_transaction: '2024-06-01',
    aum: 320000,
    is_available: true
  }
];
