import Image from "next/image";

export const Cover = ({ children, background }) => {
    return  (
    
    
    <div className="h-screen bg-slate-800 flex justify-center items-center relative min-h-[400]">
        <Image alt="cover" src={background} fill className="mix-blend-soft-light object-cover" />
        {children}
    </div>
    
    );
};