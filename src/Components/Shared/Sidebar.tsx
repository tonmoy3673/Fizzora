import { useEffect, useState } from "react";


const Sidebar = () => {
    const [categories,setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt"
    ]);

    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string| null>(null)


    // ============= Load Categories ========//
    useEffect(()=>{
        setLoading(true)
        const loadCategories =async()=>{
            const res = await fetch('https://dummyjson.com/products')
            try{
                if (!res.ok) {
                    throw new Error('API response not found')
                   
                }
                else{
                const data = await res.json();
                setCategories(data);
                setError(null);
                }

            }
            catch(err : unknown){
                if(err instanceof Error){
                   setError(err.message)
                }
            }
            finally{
                setLoading(false)
            }
        }
        loadCategories();
    },[])
console.log(categories);
    return (
        <div>
            <h2>Sidebar</h2>
        </div>
    );
};

export default Sidebar;