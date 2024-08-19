export interface Services{
    iconUrl: string,
    service: string,
    detail: string
}

export const fetchServices = async(): Promise<Services[]> =>{
    const response = await fetch("http://localhost:6005/api/services");
    if(!response.ok){
        throw new Error("Failed to fetch services");
    }
    const data = await response.json();
    return data;
}