const Card = ({ children }) => {
    return (
        <div className="bg-neutral-900/60 p-6 rounded-3xl border border-neutral-800 hover:border-[#C8F400]">
            {children}
        </div>
    )
}

export default Card