import { useState } from "react";


const Sidebar = () => {
    const [categories,setCategories] = useState<string[]>([]);
    const [keywords] = useState([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt"
    ])
    return (
        <div>
            <h2>Sidebar</h2>
        </div>
    );
};

export default Sidebar;