

export async function userData (user){
    const data = await fetch(`https://api.github.com/users/${user}`);
    const u = await data.json();
    return u;
}