const Who = () => {
	return (
		<div className="flex min-h-[510px] w-full gap-x-10 p-5">
			<div className="flex w-1/2 flex-col items-center gap-y-7 rounded-3xl bg-[#132b57] p-5">
				<h3 className="flex items-center gap-x-4 text-2xl font-medium">
					Kim? Kim?? <img src="/assets/Shrug.svg" className="w-7" />
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
				</div>
			</div>
			<div className="w-1/2 rounded-3xl bg-[#132b57]"></div>
		</div>
	);
};

export default Who;
