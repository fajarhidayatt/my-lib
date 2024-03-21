export default function SelectInput({
    children,
    className = "",
    value = "",
    placeholder = "",
    ...props
}) {
    return (
        <select
            className={
                "w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            value={value}
            {...props}
        >
            <option value="" disabled hidden>
                {placeholder}
            </option>
            {children}
        </select>
    );
}
