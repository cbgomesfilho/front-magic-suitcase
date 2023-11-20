import { AddressRequest } from "../customers/address_request";

export interface SupplierRequest {
    name:     string;
    email:    string;
    phone:    string;
    document: string;
    address: AddressRequest;
}