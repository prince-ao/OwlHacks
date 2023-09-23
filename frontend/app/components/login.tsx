import { useTheme } from "next-themes";



export default function loginPage() {

    const {setTheme} = useTheme();

    return (
        <div className="flex">
        <div className="w-[25%] min-h-page border-e-2"></div>
        <div></div>
        </div>
    );

}