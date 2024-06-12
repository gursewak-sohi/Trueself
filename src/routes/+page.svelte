<script>
	import logo from '$lib/images/logo.svg';
	import version from '$lib/images/free-version.svg';
	import audio from '$lib/images/audio.svg';
	import play from '$lib/images/play.svg';
</script>

 <svelte:head>
	<title>TrueSelf</title>
	<meta name="description" content="TrueSelf app" />
</svelte:head>

<section class="py-9">
	<div class="border border-white/20 md:border-none rounded-md relative">
		<div class="absolute -top-1 left-4 md:left-0">
			<img src={version} alt="Free version" />
		</div>
		<div class="absolute right-5 md:right-0 top-5">
			<img src={logo} alt="logo" />
		</div>
		<div class="pt-9 px-4 md:px-0">
			<h4 class="font-light uppercase text-xl leading-5">Your Soulprint is</h4>
			<h1 class="mt-1.5 leading-9 font-light uppercase text-[40px] after:bg-star after:bg-no-repeat after:size-4 after:inline-block after:relative after:-top-1.5 after:-right-1.5">The Intuitive Harmonizing Trailblazer</h1>
			<p class="mt-6 text-[17px] leading-[140%] font-light after:bg-arrow after:w-10 after:bg-no-repeat after:h-4 after:inline-block after:relative after:top-1 after:-right-1.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<!-- Audio Player -->
			<div class="rounded-md bg-white/10 shadow-gradient-border pl-4 pr-4 py-2.5 flex items-center gap-3 my-7 hover:bg-white/20 duration-150">
				<div class="flex-shrink-0">
					<img src={audio} alt="audio" />
				</div>
				<div class="text-lg font-semibold flex-1 truncate">Listen to your Soulprint</div>
				<button type="button" class="flex-shrink-0 ml-auto">
					<img src={play} alt="play" />
				</button>
			</div>
		</div>
		<div class="bg-black/10 rounded-md px-4 py-3 text-[15px] leading-[140%] font-light">➼ Your Soulprint is a revolutionary synthesis of potent systems of Personality, Psychology and Ancient Wisdom. Each system represent a different facet of your True Nature combined into your 100% unique TrueSelf Soulprint.</div>
	</div>
	 
</section>


 

 
