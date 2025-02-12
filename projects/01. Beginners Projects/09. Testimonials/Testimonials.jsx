import { useState, useCallback } from "react"

const Testimonials = () => {

    const buttonClasses = "bg-sky-700 rounded-lg px-4 py-1 hover:bg-sky-800 active:scale-95 text-white transition-all duration-200"

    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "This team transformed our marketing strategy and helped us reach new heights.",
            author: "Sarah Johnson"
        },
        {
            quote: "Their support has been invaluable in optimizing our workflow and increasing productivity.",
            author: "David Brown"
        },
        {
            quote: "Working with them has taken our designs to the next level with their creative insights.",
            author: "Emily Davis"
        },
        {
            quote: "Their insights have streamlined our processes, allowing us to deliver faster and better.",
            author: "Michael Lee"
        },
        {
            quote: "Their strategic approach to problem-solving has greatly improved our operational efficiency.",
            author: "Olivia Martinez"
        }
    ];

    const handlePrevClick = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const handleNextClick = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);

    return (
        <div className="bg-zinc-200 rounded-lg h-40 w-fit p-6 shadow-lg flex flex-col justify-around items-center gap-4">
            <div>
                {testimonials[currentIndex].quote}
            </div>

            <div className="font-semibold mb-2">
                {testimonials[currentIndex].author}
            </div>

            <div className="flex items-center justify-between w-full px-14">
                <button className={buttonClasses} onClick={handlePrevClick}>Prev</button>
                <button className={buttonClasses} onClick={handleNextClick}>Next</button>
            </div>
        </div>
    )
}

export default Testimonials;