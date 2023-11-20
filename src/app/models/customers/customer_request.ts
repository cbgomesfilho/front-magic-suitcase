import { AddressRequest } from './address_request';
export interface CustomerRequest{
    name:     string;
    email:    string;
    phone:    string;
    document: string;
    address: AddressRequest;
}