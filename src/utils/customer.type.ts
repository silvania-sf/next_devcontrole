export interface CustomerProps{
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
}