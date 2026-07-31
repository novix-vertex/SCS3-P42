import TeamCard from "../TeamCard";

const Team = () => {
    const team = [
        {
            initials: "A",
            title: "Aryan Shah",
            subtitle: "Founder & CEO",
            bgColor: "bg-lime-400",
            textColor: "text-black",
        },
        {
            initials: "P",
            title: "Priya Mehta",
            subtitle: "Head of Product",
            bgColor: "bg-blue-500",
            textColor: "text-white",
        },
        {
            initials: "R",
            title: "Rohan Verma",
            subtitle: "Lead Engineer",
            bgColor: "bg-purple-500",
            textColor: "text-white",
        },
        {
            initials: "S",
            title: "Sneha Kapoor",
            subtitle: "Design Director",
            bgColor: "bg-rose-500",
            textColor: "text-white",
        },
    ];
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white">{"Meet the Team"}</h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 flex-wrap">

                {team.map((item, index) => (
                    <TeamCard
                        key={index}
                        {...item}
                    />
                ))}


            </div>
        </>
    )
}

export default Team