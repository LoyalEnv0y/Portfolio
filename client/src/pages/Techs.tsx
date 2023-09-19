const Techs = () => {
	return (
		<main className="bg-[#282828] p-10">
			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Yellow.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="text-center text-4xl font-semibold">
						Teknik Bilgilerim
					</h1>
				</div>
			</div>

			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Blue.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="text-center text-4xl font-semibold">
						Bildiklerim
					</h1>
				</div>
			</div>

			<section>
				<div className="flex h-20 w-[317px] items-center justify-center bg-[url('images/Blob-Title.png')] bg-contain bg-center bg-no-repeat">
					<h2 className="text-2xl">Programlama Dilleri</h2>
				</div>

				<div className="w-[400px] rounded-[4rem] bg-white">
					<div className="flex h-28 w-full items-center justify-evenly rounded-t-[4rem] bg-[#E9CA32]">
						<h3 className="text-3xl font-semibold">JavaScript</h3>
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
							<img
								src="/assets/JS.svg"
								alt=""
								className="h-14 w-14"
							/>
						</div>
					</div>
					<div className="h-[560px] p-4">
						<p className="h-[20%] text-black">
							Web geliştirmenin temeli olan HTML’i 2020 yılında
							öğrenmeye başladım. 2020’den beri geliştirdiğim
							projelerin neredeyse hepsinde kullanıyorum.
						</p>

						<div className="flex justify-evenly rounded-t-xl border-b-2 bg-[#282828] p-1 text-white">
							<a href="">Projeler</a>
							<a href="">Sertifikalar</a>
						</div>

						<div className="h-[74%] w-full rounded-b-xl bg-[#282828]"></div>
					</div>
					<div className="flex h-28 w-full items-center justify-evenly rounded-b-[4rem] bg-[#E9CA32]">
						<h3 className="text-3xl font-semibold">Yeterlilik</h3>
						<div className="relative h-20 w-20 rounded-full bg-white p-2">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E9CA32]">
								<p className="text-white">75%</p>
							</div>
							
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								className="absolute left-0 top-0 h-20 w-20 fill-none stroke-[#ff2f2f] stroke-[10px]"
								strokeDasharray={471}
								strokeDashoffset={471}
							>
								<circle
									cx="40"
									cy="40"
									r="35"
									stroke-linecap="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</section>

			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Red.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="mt-10 self-start text-center text-4xl font-semibold">
						Öğreneceklerim
					</h1>
				</div>
			</div>
		</main>
	);
};

export default Techs;
