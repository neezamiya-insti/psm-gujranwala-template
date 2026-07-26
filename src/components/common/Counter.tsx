"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  value: string | number;
}

export default function Counter({ value }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const numericValue = Number(String(value).replace(/\D/g, ""));

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, numericValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const element = document.getElementById(`counter-${value}`);

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span id={`counter-${value}`}>
      {count}
      {String(value).includes("+") && "+"}
      {String(value).includes("%") && "%"}
    </span>
  );
}