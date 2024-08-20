export interface Reviews{
    imgUrl: string,
    reviews: number,
    comment: string,
    name: string,
    date: Date,
}

export const fetchReview = async(): Promise<Reviews[]> =>{
    const response = await fetch("https://petsiteprojectcomplete1-dq528k1c.b4a.run/api/review")
    if(!response.ok){
        throw new Error("Failed to fetch Reviews");
    }
    const data = await response.json()
    return data;
}