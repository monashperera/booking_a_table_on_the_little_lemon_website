export default function Button({children, className, onClick}) {
    return(
        <button className={`btn ${className}`} onClick={onClick}>
            {/* fs 18 */}
            {children}
        </button>
    );
};