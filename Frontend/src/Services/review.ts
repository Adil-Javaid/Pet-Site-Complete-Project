export interface Reviews{
    imgUrl: string,
    reviews: number,
    comment: string,
    name: string,
    date: Date,
}

export const fetchReview = async(): Promise<Reviews[]> =>{
    const response = await fetch("https://petsiteprojectcomplete-i0cstd47.b4a.run/api/review")
    if(!response.ok){
        throw new Error("Failed to fetch Reviews");
    }
    const data = await response.json()
    return data;
}