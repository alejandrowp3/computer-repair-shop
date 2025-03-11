"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

export default function BackButton({
  title,
  className,
  variant,
  ...props
}: Props) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant={variant}
      className={className}
      title={title}
      {...props}
    >
      {title}
    </Button>
  );
}
