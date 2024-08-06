import Link from "next/link";

export default function MealsPage(){
    return (
        <>
            <h1>Meals Page</h1>
            <div>
                <Link href="meal1">meal 1</Link>
                <Link href="meal2">meal 2</Link>
            </div>
            <div>
                <Link href="meals/share">Share</Link>
            </div>
        </>
    );
}