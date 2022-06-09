const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
};

export default Admin;

const getPokemons = async () => {
    const res = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();
    return data.results;
};