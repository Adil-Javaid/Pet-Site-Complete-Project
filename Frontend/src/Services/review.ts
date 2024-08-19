export interface Reviews{
    imgUrl: string,
    reviews: number,
    comment: string,
    name: string,
    date: Date,
}

export const fetchReview = async(): Promise<Reviews[]> =>{
    const response = await fetch("http://localhost:6005/api/review")
    if(!response.ok){
        throw new Error("Failed to fetch Reviews");
    }
    const data = await response.json()
    return data;
}