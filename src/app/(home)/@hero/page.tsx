import Slider from "./_components/slider";

export async function getSlides() {
    try {
        const res = await fetch(
            `${process.env.API_URL}/slide`
        );
        const result = await res.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

const Hero = async () => {
    const slider = await getSlides();

    return (
        <div className="relative h-[calc(100dvh_-_80px)] bg-primary">
            {slider && <Slider slider={slider} />}
        </div>
    );
};

export default Hero;
