import { motion } from 'framer-motion';

const Who = () => {
	return (
		<div className="flex h-[700px] w-full flex-wrap justify-evenly gap-x-10 p-5">
			<div className="flex h-[600px] w-[40%] min-w-[500px]  flex-col items-center gap-y-7 rounded-3xl bg-[#132b57] p-5">
				{/* <h3 className="flex items-center gap-x-4 text-5xl font-medium">
					Kim? Kim?? <img src="/assets/Shrug.svg" className="w-12" />
				</h3>

				<hr className="w-full" />

				<div className="flex flex-col gap-y-4">
					<p className=" text-xl">Merhaba! 👋</p>
					<p>
						Ben Çetin Tekin. İzmir Ekonomi Üniversitesi’nde Bilgisayar
						programcılığı okuyorum. Kendimi Web Geliştirme üzerinde
						geliştiriyor, hergün yeni teknolojiler öğreniyor, ve
						öğrendiğim teknolojiler ile pratiğimi geliştiriyorum.
					</p>
					<p>
						Kendimi yazılım dünyasında mutlu hissediyorum ve proje
						geliştirmeye, yeni şeyler öğrenmeye bayılıyorum.
					</p>
				</div> */}
			</div>

			<div className="relative h-[600px] w-[40%] min-w-[500px] rounded-3xl bg-[#132b57]">
				{/* <motion.div
					className="test absolute w-5/12 rounded-2xl bg-black p-4 duration-300"
					initial={{ opacity: 0, translateX: 0, translateY: 0 }}
					whileInView={{
						opacity: 1,
						translateX: '70%',
						translateY: '40%',
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25, ease: [0.5, 0, 0.5, 0] }}
				>
					<img src="/images/Student.png" />
				</motion.div>
				<motion.div
					className="test  absolute w-5/12 rounded-2xl bg-black p-4 duration-300"
					initial={{ opacity: 0, translateX: 0, translateY: 0 }}
					whileInView={{
						opacity: 1,
						translateX: '15%',
						translateY: '150%',
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25, ease: [0.5, 0, 0.5, 0] }}
				>
					<img src="/images/University.png" />
				</motion.div>
				<motion.div
					className="test  absolute w-5/12 rounded-2xl bg-black p-4 duration-300"
					initial={{ opacity: 0, translateX: 0, translateY: 0 }}
					whileInView={{
						opacity: 1,
						translateX: '125%',
						translateY: '150%',
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25, ease: [0.5, 0, 0.5, 0] }}
				>
					<img src="/images/Programming.png" />
				</motion.div> */}
			</div>
		</div>
	);
};

export default Who;
