import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from './Slider';

const MainPageHeader = () => {
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
	const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const fullY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
	const mountainsFarY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
	const mountainsMiddleY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const mountainsCloseY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
	// const bg5 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
	// const titleY = useTransform(scrollYProgress, [0, 1], ['-40%', '300%']);

	return (
		<header>
			<div
				ref={ref}
				className="relative flex h-[1250px] overflow-hidden w-full items-center justify-center font-orbitron"
			>
				{/* <motion.div
					className="relative z-20 flex flex-col items-center gap-y-10"
					style={{ y: titleY }}
				>
					<h1 className="text-7xl font-bold md:text-9xl">Çetin Tekin</h1>
					<h2 className="text-2xl md:text-4xl">Web Geliştirici</h2>
				</motion.div> */}

				<motion.div
					className="absolute inset-0 z-0 bg-[url('/images/header/Full.png')]"
					style={{ y: fullY }}
				/>

				<motion.div
					className="absolute inset-0 z-10 bg-[url('/images/header/Sky.png')] bg-no-repeat"
					style={{ y: skyY }}
				/>

				<motion.div
					className="absolute inset-0 z-20 bg-[url('/images/header/Mountains-Far.png')] bg-bottom bg-no-repeat"
					style={{ y: mountainsFarY }}
				/>

				<motion.div
					className="absolute inset-0 z-30 bg-[url('/images/header/Mountains-Middle.png')] bg-bottom bg-no-repeat"
					style={{ y: mountainsMiddleY }}
				/>

				<motion.div
					className="absolute inset-0 z-40 bg-[url('/images/header/Mountains-Close.png')] bg-no-repeat bg-bottom"
					style={{ y: mountainsCloseY }}
				/>

				<div className="absolute inset-0 z-50 bg-[url('/images/header/Trees.png')] bg-bottom bg-no-repeat" />
			</div>

			{/* <Slider /> */}
		</header>
	);
};

export default MainPageHeader;
