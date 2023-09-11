import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Test = () => {
	const ref = useRef(null);

	// useScroll hook returns properties for the given element and properties.
	// In this case we take the horizontal scroll progress from it. This returns an object.
	// In this object we can access the exact moment where the animation is. It returns a value
	// between 0 and 1. 
	const { scrollYProgress } = useScroll({
		target: ref,
		// Below we specify when we want to trigger and end this animation.
		// Animation starts when the start of our viewport meets with the start of the element.
		// Animation ends when the start of our viewport meets with the end of our element.
		offset: ['start start', 'end start'],
	});

	// Use transform helps us use dynamic properties. Here we specify that we want to track
	// scroll progress of the referenced div and when it's value is 0%. the property should be set
	// to 0 and when it is 1 the property should be set to 100%. the property increases gradually
	// between the borders.  
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);

	return (
		<div
			ref={ref}
			className="flex-grid relative flex h-screen w-full  items-center justify-center  overflow-hidden"
		>
			<motion.h1
				className="relative z-10 text-7xl font-bold text-white md:text-9xl"
				style={{ y: textY }}
			>
				PARALLAX
			</motion.h1>

			<motion.div
				className="absolute inset-0 z-0 bg-[url('/images/Mountain-Full.png')] bg-cover bg-bottom"
				style={{ y: backgroundY }}
			/>
			<div className="absolute inset-0 z-20 bg-[url('/images/Mountain-Bottom.png')] bg-cover bg-bottom" />
		</div>
	);
};

export default Test;
