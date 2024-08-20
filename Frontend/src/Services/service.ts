export interface Services{
    iconUrl: string,
    service: string,
    detail: string
}

export const fetchServices = async(): Promise<Services[]> =>{
    const response = await fetch("https://petsiteprojectcomplete1-dq528k1c.b4a.run/api/services");
    if(!response.ok){
        throw new Error("Failed to fetch services");
    }
    const data = await response.json();
    return data;
}