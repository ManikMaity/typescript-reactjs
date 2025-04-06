"use server";

export async function getPosts () {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok){
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
    catch(err){
        console.log(err);
    }
}