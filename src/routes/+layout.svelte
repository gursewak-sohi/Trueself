<script>
	import bg from '$lib/images/bg.png';
	import '../app.css'
</script>

<div class="min-h-screen">
	<!-- Background Image -->
	<div class="fixed inset-0 -z-10">
		<img class="bg-cover size-full" src={bg} alt="background" />
	</div>
	<!-- Main Content -->
	<main class="px-2.5 md:px-8 max-w-3xl mx-auto antialiased text-white">
		<slot />
	</main>
</div>
 