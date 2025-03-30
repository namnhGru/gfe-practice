export default function Option({title, description}) {
    
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between">
                <h3 className="font-semibold text-[16px]/[24px]">{title}</h3>
                <label htmlFor="toggle-switch"></label>
                <input type="checkbox" id="toggle-switch"/>
            </div>
            <div>
                <p className="font-normal text-[14px]/[20px]">{description}</p>
            </div>
        </div>
    )
}