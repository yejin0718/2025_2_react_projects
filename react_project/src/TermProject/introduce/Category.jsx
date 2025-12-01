import React from "react";
import CategoryBtn from "./CategoryBtn";
import "./Category.css";

function Category({ activeCategories, toggleCategory }) {
    return (
        <div className="filter-container">
            <CategoryBtn foodId="korean" emoji="🍚" foodCategory="한식"
                         onClick={toggleCategory}
                         isActive={activeCategories.has("korean")}
            />
            <CategoryBtn foodId="western" emoji="🍝" foodCategory="양식"
                         onClick={toggleCategory}
                         isActive={activeCategories.has("western")}
            />
            <CategoryBtn foodId="chinese" emoji="🍜" foodCategory="중식"
                         onClick={toggleCategory}
                         isActive={activeCategories.has("chinese")}
            />
            <CategoryBtn foodId="japanese" emoji="🍙" foodCategory="일식"
                         onClick={toggleCategory}
                         isActive={activeCategories.has("japanese")}
            />
            <CategoryBtn foodId="bakery" emoji="🍰" foodCategory="베이커리"
                         onClick={toggleCategory}
                         isActive={activeCategories.has("bakery")}
            />
        </div>
    );
}

export default Category;
