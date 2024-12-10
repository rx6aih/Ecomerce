const OnPageTitle = ({title}) => {
    return (
        <div className={"flex flex-row gap-2"}>
            <div className={"bg-red-500 rounded-md w-[20px] h-[40px]"}></div>
            <p className={"font-medium text-lg text-red-500 mb-auto mt-auto ml-4"}>{title}</p>
        </div>
    );
};
export default OnPageTitle;