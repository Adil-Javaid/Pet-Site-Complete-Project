export interface Comment{
    name: string,
    comment: string,
    date: Date
}

export interface Blogs{
    title: string,
    author: string,
    content: string,
    imgUrl: string,
    date: Date,
    tags: [String],
    likes: number,
    comments: Comment[],
}

export const fetchBlog = async (): Promise<Blogs[]> =>{
    const response = await fetch("https://petsiteprojectcomplete1-dq528k1c.b4a.run/api/blog");
    if(!response.ok){
        throw new Error("Failed to fetch blog");
    }
    const data = await response.json();
    return data;
}