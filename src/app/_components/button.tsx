import { cn } from "@/utils/cn";
import Link from "next/link";

const variants = {
    primary: "bg-primary px-6 hover:bg-primary/60",
    custom: "",
} as const;

type Variant = keyof typeof variants;

const Button = ({
    href,
    title,
    className,
    variant = "primary",
}: {
    href: string;
    title: string;
    className?: string;
    variant?: Variant;
}) => {
    const defaultClass = cn(
        "flex w-fit items-center justify-center rounded-md py-4 text-white cursor-pointer mt-6 transition-all duration-400",
        variants[variant],
    );

    if (href)
        return (
            <Link href={href} className={cn(defaultClass, className)}>
                {title}
            </Link>
        );

    return <button className={cn(defaultClass, className)}>{title}</button>;
};

export default Button;
